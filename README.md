# SmartMooV

**Movemos marcas, ligamos pessoas.**

SmartMooV is a vehicle-wrap advertising marketplace for Portugal — connecting local businesses with high-mileage drivers who display vinyl advertising on their personal vehicles.

Phase 1 is a validation experiment in Figueira da Foz: two landing pages that capture driver and brand interest via Airtable forms.

**Live:** [smartmoov.pt](https://smartmoov.pt)

---

## Project

- **Drivers LP:** Hero → Como Funciona → FAQ → CTA → Airtable form
- **Brands LP:** Hero → Como Funciona → CTA → Airtable form
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
- `src/config.ts` — site metadata, navigation, footer links
- `src/styles/global.css` — Tailwind `@theme` block (SmartMooV palette)
- `src/pages/index.astro` — Drivers landing page
- `src/pages/brands.astro` — Brands landing page

## Deploy

Push to `master` triggers GitHub Pages deploy via `.github/workflows/deploy.yml`. PR previews are auto-deployed via `preview.yml`.

Custom domain: `smartmoov.pt` (DNS via Dynadot)

## Docs

Full documentation in [`docs/`](./docs/):
- [Project Overview](./docs/project-overview.md)
- [Architecture](./docs/architecture.md)
- [Component Inventory](./docs/component-inventory.md)
- [Development Guide](./docs/development-guide.md)
- [Deployment Guide](./docs/deployment-guide.md)
