# Burmese Shave Club website

Next.js App Router + TypeScript, exported as static HTML. The five public pages are migrated from `../static/`. Laravel (`../ecom/`) and the mobile app (`../rn/`) remain separate projects.

## Run locally

Use Node.js 22 or newer. Run these commands inside `web/`:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If that port is occupied, Next.js prints the port it selected.

```sh
npm run build
npm run preview
```

Production preview: http://127.0.0.1:4173. `next start` is not used with static export.

## Architecture

- `src/app/`: route content, root layout, metadata routes and scoped page styles. Pages render at build time.
- `src/components/`: shared navigation/footer and the interactive contact form. Only navigation and the form require client state.
- `src/lib/site.ts`: site identity, page metadata and canonical URLs.
- `src/styles/policy.module.css`: shared privacy/terms styles. Other page styles are scoped to avoid collisions during client navigation.
- `public/assets/`: original images and local brand font. Body/heading fonts are requested from Google Fonts at runtime, with system fallbacks.
- `out/`: generated deployable files; never edit these directly.

Content is maintained in TSX, not injected HTML or generated from the old site at build time. No state-management library, CMS, API server or workspace monorepo tooling is needed for this scope. Keep business rules and authentication in Laravel.

## Contact API and analytics

Copy `.env.example` to `.env.local` if configuration is needed. `NEXT_PUBLIC_CONTACT_ENDPOINT` defaults to `/api/v1/contact`. In development, point it to a reachable Laravel URL whose existing CORS policy allows the web origin. Environment values are public and baked into the build; never put secrets here.

The local static preview does not proxy Laravel; its `/api/` response intentionally reports that the API is unavailable. Contact form browser tests intercept requests and send no real messages. End-to-end email delivery requires the actual Laravel deployment.

Analytics is enabled only when `NEXT_PUBLIC_GA_ID` is set. The example contains the site's existing property ID. Set it before the production build to preserve analytics.

## Deployment

Upload the contents of `out/`, including `.htaccess`, to the public website's document root after reviewing the existing host configuration. Apache needs `mod_rewrite` and appropriate `AllowOverride` permissions. The supplied rules redirect `/privacy` and `/terms` to `/privacy.html` and `/terms.html` and serve the other pages at their extensionless URLs. Other hosts need equivalent rules.

Route `/api/` to the existing Laravel application in the host configuration, or build with its separate URL. Do not overwrite Laravel's public directory or its front controller. This project does not modify the backend. Keep the old static deployment available for rollback until URLs, assets and real contact delivery have been verified.

Static export does not provide Server Actions, runtime SSR or the default Next.js image optimization server. Future features requiring those need a deployment decision. Existing raster assets are served directly; image compression is a separate improvement.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npm test
```

Browser tests use installed Google Chrome, start the exported preview and cover all five routes at desktop/mobile widths, navigation, contact handling, redirects and 404s. These tests do not validate Apache configuration itself.

Dependency audit: the installed lint toolchain currently reports five high-severity findings through `braces` / `micromatch` / `fast-glob`. These are development dependencies; the suggested automated fix downgrades Next.js lint tooling across major versions, so it has not been applied. Recheck upstream updates before changing the lint stack.
# burmeseshaveclub
