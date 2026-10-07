(function spawnParticles() {
  const container = document.getElementById('pts');
  const count = 24;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const size = Math.random() * 3.5 + 1.2;
    p.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `bottom:-${size}px`,
      `animation-duration:${15 + Math.random() * 24}s`,
      `animation-delay:${Math.random() * 20}s`,
    ].join(';');
    container.appendChild(p);
  }
})();
