# FACT research website

Static website. Open `index.html` directly, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

Updated on 2026-10-29:

- Main film: unchanged, embedded from YouTube (uA1-vd4wZLg). No local copy of the full film is kept.
- Task Demonstrations: ten task segments cut from the FACT film (`videos/tasks/01_…10_*.mp4`, 568×320), each trimmed to a single continuous task shot (title cards, montages and cut-aways removed), with first-frame posters in `assets/tasks/`. The former robot multi-view clips (media1–14) were removed.
- Dataset film: EgoForce V34 (`videos/dataset.mp4`), new title card; poster regenerated from it.
- Method: animated brain/cerebellum overview with clickable planner / refiner diagrams and the narrated architecture animation. The static teaser figure and the paper architecture image were removed.
- Results: histograms extracted from the FACT film (4:11 and 4:22), including the tasks 8–10 average count.
- Section headings (Abstract, Dataset, Method, Results) share one white 32 px style.

No build step or external font service is needed. Keep `assets/`, `videos/`, `styles.css`, `results.js`, and `FACT.pdf` beside `index.html` when uploading to GitHub Pages.

The original source videos are preserved in their original locations; web encodes preserve the complete film content and frame sequence. This update changes local files only.
