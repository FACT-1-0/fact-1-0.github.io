(() => {
  // Method explorer: overview animation, brain / cerebellum open their detail views.
  const explorer = document.getElementById('method-explorer');
  if (explorer) {
    const tabs = [...explorer.querySelectorAll('.method-tabs [role="tab"]')];
    const views = [...explorer.querySelectorAll('.method-view')];
    const show = (name) => {
      tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.view === name)));
      views.forEach((view) => { view.hidden = view.dataset.view !== name; });
    };
    tabs.forEach((tab) => tab.addEventListener('click', () => show(tab.dataset.view)));
    explorer.querySelectorAll('.icon-btn').forEach((btn) => {
      const open = () => { show(btn.dataset.view); explorer.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };
      btn.addEventListener('click', open);
      btn.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
    });
    show('overview');
  }
  // Each narrated film gets its own uninterrupted playback.
  const films = [...document.querySelectorAll('.main-video video')];
  films.forEach((film) => film.addEventListener('play', () => {
    films.forEach((other) => { if (other !== film) other.pause(); });
  }));
})();
