const control = document.querySelector('.motion-toggle');
const track = document.querySelector('.logo-track');
const english = document.documentElement.lang === 'en';
control.addEventListener('click', () => {
  const paused = control.getAttribute('aria-pressed') !== 'true';
  control.setAttribute('aria-pressed', String(paused));
  control.textContent = english ? (paused ? 'Resume motion' : 'Pause motion') : (paused ? 'Reprendre le défilement' : 'Mettre en pause');
  track.classList.toggle('paused', paused);
});
