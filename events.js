window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Multiplicador > 1 para que el texto suba más rápido que scroll
  const speedMultiplier = 1.2;

  const header = document.querySelector('.header');
  const social = document.querySelector('.social');
  
  // Aplica una transformación vertical inversa proporcional al scroll
  header.style.transform = `translateY(-${scrollY * speedMultiplier}px)`;
  social.style.transform = `translateY(-${scrollY * speedMultiplier}px)`;
});


window.addEventListener('scroll', () => {
  const quote = document.querySelector('.quote');
  const scrollY = window.scrollY;
  const dropLimit = 230;             
  const speedMultiplier = 1.5;     

  // Calculamos cuánto debería bajar como máximo
  const maxDrop = dropLimit * speedMultiplier;

  if (scrollY <= dropLimit) {
    // Movimiento hacia abajo, suavemente acelerado
    const progress = scrollY / dropLimit;
    const downwardMove = progress * maxDrop;
    quote.style.transform = `translateY(${downwardMove}px)`;
  } else {
    // Movimiento hacia arriba sin salto, desde donde se quedó
    const upwardMove = maxDrop - (scrollY - dropLimit);
    quote.style.transform = `translateY(${Math.max(upwardMove, -200)}px)`;
  }
});






