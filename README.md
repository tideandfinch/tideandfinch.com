# tideandfinch.com

Landing page for Tide and Finch — `tideandfinch.com`.

## Structure
- `Index.html` / `Code.gs` / `appsscript.json` — Google Apps Script web app (serves landing + writes to Sheet `1h-dYEoxdH4fNKCHBUCO5I0rIw-N70c5dIgPJMm7JGds`)
- `site/` — static GitHub Pages version (same UI, points to GAS backend for email capture)
- `.github/workflows/deploy-gas.yml` — deploys to Apps Script on push to main

## Deployment
1. Push to `main` → GitHub Pages deploys static site
2. Same push → GitHub Action deploys `Index.html`/`Code.gs`/`appsscript.json` to Apps Script project `1BwuJmfWAAzSI5tef7HRxaPckXobiqp68Z8efsMBK1GpB5nyZLhoAQP8-`

Configure secrets in GitHub repo settings:
- `CLASP_CREDENTIALS` — GCP service account JSON for clasp (from tide-and-finch-gws)
- `SCRIPT_ID` — `1BwuJmfWAAzSI5tef7HRxaPckXobiqp68Z8efsMBK1GpB5nyZLhoAQP8-`

## Local
Site data is source of truth here. Edit `Index.html` and push.
