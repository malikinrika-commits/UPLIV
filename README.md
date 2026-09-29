# UPLIV

## Contact forms and resume applications

GitHub Pages only hosts the static website; it cannot run the API. The API must be deployed separately. This repository includes a Render blueprint in `render.yaml` for that service. Email is sent through the Resend HTTPS API.

1. In Render, create a new Blueprint from this repository and deploy the `upliv-api` web service.
2. In the Render service's environment settings, set `RESEND_API_KEY` to your Resend API key. Keep it server-side; never put it in frontend variables or commit it. The blueprint configures `CONTACT_EMAIL` as the recipient and allows the GitHub Pages site origin; set `CORS_ORIGINS` if you use a different website origin.
3. Copy the API service's public base URL (for example, `https://upliv-api.onrender.com`). In the GitHub repository, go to **Settings → Secrets and variables → Actions → Variables**, create the repository variable `UPLIV_API_URL` with that URL, and rerun the Pages deployment workflow (or push a commit).

The Pages build then sends contact and career submissions to the hosted API. Local development continues using Vite's `/api` proxy to `http://localhost:4001`. If the production API URL is not configured, the forms show an explicit setup message instead of silently posting to a nonexistent Pages endpoint.

Never put `RESEND_API_KEY` in `VITE_*` variables: values prefixed with `VITE_` are bundled into public browser code.

The API health endpoint reports whether the Resend key and recipient are configured, but never returns credentials. With the temporary `onboarding@resend.dev` sender, Resend may restrict delivery to the email address associated with your Resend account until you verify a sending domain.