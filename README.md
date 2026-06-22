# AMBO Retail India — Website

A multi-page marketing website for **AMBO Retail India Limited**, an FMCG brand, built with plain
**HTML, CSS and vanilla JavaScript** — no build step, no framework. Designed to be uploaded to
GitHub and served directly from **GitHub Pages**.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, stats, D2R model, product portfolio, why AMBO, insights |
| Our Story | `about.html` | Mission/vision/values, the AMBO advantage, growth timeline |
| Our Products | `products.html` | Filterable product catalogue by category |
| The Ecosystem | `ecosystem.html` | Ecosystem hub diagram, 8 pillars, process flow |
| Technology | `technology.html` | Technology pillars, insight-to-impact |
| Our Team | `team.html` | Founders, leadership, advisory board |
| Investors | `investors.html` | Growth story, D2R comparison, Vision 2030 |
| Careers | `careers.html` | Open positions, life at AMBO, benefits |
| Contact | `contact.html` | Contact details + enquiry form + map |

## Project structure

```
.
├── index.html, about.html, ...      # all pages (repo root)
├── css/style.css                    # full design system
├── js/main.js                       # shared header/footer + interactions
├── img/
│   ├── logo/   ambo-logo.png, favicon.png
│   ├── hero/   products-hero.png
│   └── photos/ fmcg-company.png, team-group.png, tech-dashboard.png
├── assets/                          # original reference design images
├── .nojekyll                        # tells GitHub Pages to skip Jekyll
└── README.md
```

The shared **header and footer** are injected by `js/main.js`, so navigation and contact details
are maintained in a single place. Images in `img/` were cropped from the reference designs in
`assets/`.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. **Create a repository** on GitHub (e.g. `ambo-website`).
2. **Push this folder** to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "AMBO Retail website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
6. Wait ~1 minute. Your site will be live at:

   ```
   https://<your-username>.github.io/<repo>/
   ```

All links are relative, so the site works correctly from a project subpath
(`username.github.io/repo/`) without any configuration changes.

## Notes

- Fonts (Poppins, Inter) load from Google Fonts via CDN.
- The contact form is front-end only (shows a success message); wire it to a form service
  (e.g. Formspree) or backend to receive submissions.
- Text, statistics and team names are illustrative placeholders based on the reference design -
  replace with final approved content before going live.
