const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '');

export const apiUrl = (path: string): string => {
  if (!apiBaseUrl && import.meta.env.PROD) {
    throw new Error('The online form service is not configured. Please email us directly.');
  }

  return `${apiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};