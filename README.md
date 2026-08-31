# tideandfinch.com

Landing page for Tide and Finch — `tideandfinch.com`.

## Structure
- `Index.html` / `Code.gs` / `appsscript.json` — Google Apps Script web app (serves landing + writes to Sheet `1h-dYEoxdH4fNKCHBUCO5I0rIw-N70c5dIgPJMm7JGds`)
- `site/index.html` — static GitHub Pages version (same UI, posts to GAS backend https://script.google.com/macros/s/AKfycbxzgH_o5q4sAYjQM4RitutMGNj9IpIhBgKwZsDOMWVgxWfe_KS4N23-jUxbNXlPw87roA/exec for email capture)
- `.github/workflows/deploy-gas.yml` — deploys backend to Apps Script on push to main, and deploys frontend to GitHub Pages

## Deployment
1. Push to `main` → GitHub Pages deploys static site from `site/` to `gh-pages` branch
2. Same push → GitHub Action deploys `Code.gs`/`Index.html`/`appsscript.json` to Apps Script project `1ImvFEeK2Sru0q566uJykLTj-gvSFK477klN_7Lg6zVA3BOJIaySfRi27`

Backend URL: https://script.google.com/macros/s/AKfycbxzgH_o5q4sAYjQM4RitutMGNj9IpIhBgKwZsDOMWVgxWfe_KS4N23-jUxbNXlPw87roA/exec

Configure secrets in GitHub repo settings:
- `CLASP_CREDENTIALS` — GCP service account JSON for clasp (from tide-and-finch-gws)
- `SCRIPT_ID` — `1ImvFEeK2Sru0q566uJykLTj-gvSFK477klN_7Lg6zVA3BOJIaySfRi27` (or hardcoded in clasp.json)

## Local
Site data is source of truth here. Edit `site/index.html` for public landing, `Index.html` for Apps Script version.
