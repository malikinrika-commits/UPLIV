import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const apiPort = Number(process.env.PORT || 4001);
const apiHealthUrl = `http://127.0.0.1:${apiPort}/api/health`;
let backendProcess;
let vite;
let isShuttingDown = false;

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function isHealthyBackend() {
  try {
    const response = await fetch(apiHealthUrl, { signal: AbortSignal.timeout(1000) });
    if (!response.ok) return false;
    const health = await response.json();
    return health.ok === true;
  } catch {
    return false;
  }
}

async function ensureBackend() {
  if (await isHealthyBackend()) {
    console.log(`Reusing application API on port ${apiPort}.`);
    return;
  }

  backendProcess = spawn(process.execPath, [path.join(projectRoot, 'server.js')], {
    cwd: projectRoot,
    env: process.env,
    stdio: 'inherit',
  });

  let backendExit;
  backendProcess.once('exit', (code) => {
    backendExit = code ?? 1;
  });

  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (await isHealthyBackend()) return;
    if (backendExit !== undefined) {
      // Another dev process may have won the race to bind the API port.
      if (await isHealthyBackend()) {
        backendProcess = undefined;
        console.log(`Reusing application API on port ${apiPort}.`);
        return;
      }
      throw new Error(`Application API exited before becoming ready (exit code ${backendExit}).`);
    }
    await pause(100);
  }

  throw new Error(`Application API did not become ready on port ${apiPort}.`);
}

async function shutdown() {
  if (isShuttingDown) return;
  isShuttingDown = true;
  await vite?.close();
  backendProcess?.kill();
}

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);

try {
  await ensureBackend();
  vite = await createViteServer({
    server: { host: '0.0.0.0', port: 3000, strictPort: false },
  });
  await vite.listen();
  vite.printUrls();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  await shutdown();
  process.exitCode = 1;
}