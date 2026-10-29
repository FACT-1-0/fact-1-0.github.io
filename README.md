# FACT research website

Static website. Open `index.html` directly, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

Updated on 2026-10-29:

- Main film: unchanged, embedded from YouTube (uA1-vd4wZLg). No local copy of the full film is kept.
- Task Demonstrations: ten task segments cut from the FACT film (`videos/tasks/01_…10_*.mp4`, 568×320), each trimmed to a single continuous task shot (title cards, montages and cut-aways removed), with first-frame posters in `assets/tasks/`. The former robot multi-view clips (media1–14) were removed.
- Dataset film: EgoForce V34 (`videos/dataset.mp4`), new title card; poster regenerated from it.
- Method: animated brain/cerebellum overview with clickable planner / refiner diagrams only. The stage panels, narrated animation, static teaser figure and paper architecture image were removed.
- Results: two looping, muted animations cut from the FACT film (`videos/results_main.mp4` 3:59–4:12, `videos/results_pretraining.mp4` 4:13–4:23), no captions.
- Section headings share one white style, clamp(36px, 4.6vw, 52px). Task Demonstrations is centred with its arrows below the title.
- Hero: affiliation logos (University of Michigan, Stanford, Microsoft) directly on the dark background under the author line, cut from the film title card with wordmarks recoloured white; Paper / Code / Data buttons at 16 px. Main video capped at 1000 px wide.
- Task Demonstrations and Results each carry a one-line 13 px subline.

No build step or external font service is needed. Keep `assets/`, `videos/`, `styles.css`, `results.js`, and `FACT.pdf` beside `index.html` when uploading to GitHub Pages.

The original source videos are preserved in their original locations; web encodes preserve the complete film content and frame sequence. This update changes local files only.
