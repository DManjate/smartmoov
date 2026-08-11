# SmartMooV

**Movemos marcas, ligamos pessoas.**

SmartMooV is a vehicle-wrap advertising marketplace for Portugal — connecting local businesses with high-mileage drivers who display vinyl advertising on their personal vehicles.

Phase 1 is a validation experiment in Figueira da Foz: two landing pages that capture brand and driver interest via Airtable forms.

**Live:** [smartmoov.pt](https://smartmoov.pt)

---

## Project

- **Brands LP:** `/` — Hero → Como Funciona → FAQ → CTA → Airtable form
- **Drivers LP:** `/drivers/` — Hero → Como Funciona → FAQ → CTA → Airtable form
- **Redirect:** `/brands/` → `/` (legacy route)
- **Content:** Portuguese (pt-PT), `tu` register for drivers, `você` for brands

## Stack

| | |
|---|---|
| Framework | Astro 6.3.3 |
| CSS | Tailwind CSS 4.3.0 |
| Fonts | Nunito Sans (Google Fonts) |
| Forms | Airtable (free plan, iframe embed) |
| Hosting | GitHub Pages (HTTPS enforced) |

Built on [farrosfr/zenix](https://github.com/farrosfr/zenix) (CC-BY-4.0), adapted with the SmartMooV design system.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Build to dist/
```

Key configuration:
- `src/config.ts` — site metadata, navigation, footer links, Cloudflare Web Analytics token
- `src/styles/global.css` — Tailwind `@theme` block (SmartMooV palette)
- `src/pages/index.astro` — Brands landing page
- `src/pages/drivers.astro` — Drivers landing page
- `src/pages/brands.astro` — redirect to `/`

## Deploy

Push to `master` triggers GitHub Pages deploy via `.github/workflows/deploy.yml`.

Custom domain: `smartmoov.pt` (DNS via PTisp)

## Docs

Full documentation in [`docs/`](./docs/):
- [Project Overview](./docs/project-overview.md)
- [Architecture](./docs/architecture.md)
- [Component Inventory](./docs/component-inventory.md)
- [Development Guide](./docs/development-guide.md)
- [Deployment Guide](./docs/deployment-guide.md)
