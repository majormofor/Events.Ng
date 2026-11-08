# Publish June Events on Render

Use a **Static Site**. This project does not need a backend or a running Node web server.

## Put the source on GitHub

Extract `june-events-render-source.zip` and upload its contents to a new GitHub repository. Keep `package.json`, `package-lock.json`, `src`, `public`, `scripts` and `render.yaml` at the repository root. Do not upload `node_modules` or a `.git` directory.

Render connects to the Git repository; it does not deploy by uploading this ZIP directly.

## Render Dashboard setup

1. Select **New → Static Site** and connect the repository.
2. Choose the branch containing the website.
3. Leave **Root Directory** blank if June Events is at the repository root. If you intentionally put it inside another repository, enter the June Events subfolder instead.
4. Set **Build Command** to `npm ci && npm run build`.
5. Set **Publish Directory** to `dist`.
6. In Environment add `NODE_VERSION` with value `24.12.0` and `SKIP_INSTALL_DEPS` with value `true`.
7. Add a Redirect/Rewrite rule: Source `/*`, Destination `/index.html`, Action **Rewrite**.
8. Create the Static Site. Wait for Render to report that deployment succeeded, then open its HTTPS URL.

No start command is needed for a Static Site.

## Use the included Blueprint instead

Choose **New → Blueprint**, connect the repository and select `render.yaml`. This file includes the build settings and explicit rewrites for the prerendered pages, followed by the fallback rule. If June Events is a subfolder, select this folder’s Blueprint path and set the service Root Directory to that folder. Do not use the parent Lensfleet configuration.

## Website address and custom domain

The build automatically uses Render’s `RENDER_EXTERNAL_URL` for canonical URLs, Open Graph links and the sitemap. You do not need to guess an `onrender.com` hostname.

If you add a custom domain later, set `VITE_SITE_URL` to its actual primary HTTPS origin, without a trailing slash, then redeploy. Follow Render’s displayed DNS instructions at your domain registrar. Render manages HTTPS for its static sites.

## Check after deployment

Open and refresh `/founder`, `/nails`, `/tattoo` and `/contact` directly. Check image loading and the WhatsApp enquiry links. A prepared enquiry still needs to be sent by the customer in WhatsApp.

If the wrong website appears, check that Render points to the June Events project rather than the parent Lensfleet website. If a refreshed route gives a 404, check the rewrite rule above.

Official references: [Static Sites](https://render.com/docs/static-sites), [Rewrites](https://render.com/docs/redirects-rewrites), [Render environment variables](https://render.com/docs/environment-variables).
