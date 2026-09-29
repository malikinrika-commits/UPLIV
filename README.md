# UPLIV

## Contact forms and resume applications

GitHub Pages only hosts the static website; it cannot run the Express/SMTP API. The API must be deployed separately. This repository includes a Render blueprint in `render.yaml` for that service.

1. In Render, create a new Blueprint from this repository and deploy the `upliv-api` web service.
2. In the Render service's environment settings, set `SMTP_PASS` to the mailbox password (or an SMTP-specific password, if your mail provider supports one). The blueprint sets the SMTP host to `mail.genuprotechnology.com`, port `587`, STARTTLS, and the mailbox address as both sender and recipient. Never commit the password or put it in Vite variables or frontend code. The blueprint already allows the GitHub Pages site origin; set `CORS_ORIGINS` if you use a different website origin.
3. Copy the API service's public base URL (for example, `https://upliv-api.onrender.com`). In the GitHub repository, go to **Settings → Secrets and variables → Actions → Variables**, create the repository variable `UPLIV_API_URL` with that URL, and rerun the Pages deployment workflow (or push a commit).

The Pages build then sends contact and career submissions to the hosted API. Local development continues using Vite's `/api` proxy to `http://localhost:4001`. If the production API URL is not configured, the forms show an explicit setup message instead of silently posting to a nonexistent Pages endpoint.

Never put SMTP credentials in `VITE_*` variables: values prefixed with `VITE_` are bundled into public browser code.

The API health endpoint reports whether SMTP settings are present, but never returns credentials. Test that the mail provider permits authenticated SMTP submission over port 587 after deploying.