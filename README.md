# panto-dev-www

Source of [panto-dev.com](https://panto-dev.com) — a personal site: portfolio, privacy
policy, terms, and a few projects that run in the browser.

Plain static HTML and one stylesheet. No framework, no build step, no dependencies.

## Layout

```
index.html      portfolio
privacy.html    served at /privacy
terms.html      served at /terms
style.css       shared stylesheet, light/dark via prefers-color-scheme
demos/          self-contained project demos (snapshots, see below)
```

## Deployment

Cloudflare Pages, connected to this repository. Build command: none. Output directory: `/`.
Every push to `main` deploys.

Cloudflare Pages serves extensionless paths, so `privacy.html` is reachable as `/privacy`.
A plain local file server will not do that — locally, open `/privacy.html`.

## Local preview

```
python -m http.server 8123
```

## demos/ are snapshots

The files under `demos/` are copies taken from their own repositories
([regexplode](https://github.com/PantoYT/regexplode),
[physarum](https://github.com/PantoYT/physarum),
[particle-life](https://github.com/PantoYT/particle-life)).
Updating an upstream project does **not** update the copy here. They are duplicated on
purpose: each is a single self-contained HTML file, so the site stays dependency-free.

## One rule

Cloudflare Pages publishes **every** file in this repository at a public URL, and there is
no way to exclude one. Anything committed here is on the internet, whether or not a page
links to it. Keep working notes, drafts and scratch files somewhere else.
