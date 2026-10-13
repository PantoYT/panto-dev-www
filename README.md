# panto-dev-www

Source of [panto-dev.com](https://panto-dev.com) — a personal site: portfolio, privacy
policy, terms, and a few projects that run in the browser.

Plain static HTML and one stylesheet. No framework, no build step, no dependencies.

## Layout

```
index.html      the page: a fastfetch-style terminal in termwall's palettes (theme picker, crt)
privacy.html    served at /privacy
terms.html      served at /terms
404.html        served with status 404 for any unknown path (without it Pages answers 200)
style.css       shared stylesheet, dark only, colors swapped by theme.js
theme.js        the theme picker and crt switch, shared by every page that has them
fonts/          JetBrains Mono (SIL OFL), self-hosted
demos/          self-contained project demos (snapshots, see below) and their preview images;
                demos/index.html is the page that lists them all, served at /demos/
favicon.svg, apple-touch-icon.png, og.png, robots.txt, sitemap.xml
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
(regexplode, physarum, particle-life, [termwall](https://github.com/PantoYT/termwall) in demo
mode, [CHIP-8 Studio](https://github.com/PantoYT/chip8-studio)). og.png and the demo previews
are screenshots; retake them after a visible change.
Updating an upstream project does **not** update the copy here. They are duplicated on
purpose: each is a single self-contained HTML file, so the site stays dependency-free.

## One rule

Cloudflare Pages publishes **every** file in this repository at a public URL, and there is
no way to exclude one. Anything committed here is on the internet, whether or not a page
links to it. Keep working notes, drafts and scratch files somewhere else.
