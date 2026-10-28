# FACT research website

Static website. Open `index.html` directly, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

Updated on 2026-10-28:

- Main film: unchanged from the live site, embedded from YouTube (uA1-vd4wZLg). `videos/fact.mp4` (FACT D53 web encode) is kept in the folder but is not referenced by the page.
- Dataset film: EgoForce V33, encoded as `videos/dataset.mp4` (1080p H.264 / AAC, fast start).
- Method: D50 architecture animation, matching poster, stage descriptions, and expandable original paper diagram.
- Typography: locally bundled Chillax Regular / Medium / SemiBold, with the established pink-to-lilac title treatment.
- Task Demonstrations: the existing nine clips, ordering, labels, autoplay, and expand interactions are preserved.
- Results: complete Tables I–III from https://arxiv.org/abs/2610.19155, with keyboard-accessible tabs, highlighted full-model columns, tied best values, and separately labeled metrics. All 101 result cells were checked against the arXiv HTML.

No build step or external font service is needed. Keep `assets/`, `videos/`, `styles.css`, `results.js`, and `FACT.pdf` beside `index.html` when uploading to GitHub Pages.

The original source videos are preserved in their original locations; web encodes preserve the complete film content and frame sequence. This update changes local files only.
