const box = document.querySelector('.box');

const animation = box.animate([
  { transform: 'translateX(0px)', backgroundColor: 'blue', opacity: 1 },
  { transform: 'translateX(300px)', backgroundColor: 'red', opacity: 0.5 }
], {
  duration: 2000,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'ease-in-out'
});

// Botões de controle
document.getElementById('playBtn').addEventListener('click', () => animation.play());
document.getElementById('pauseBtn').addEventListener('click', () => animation.pause());
document.getElementById('reverseBtn').addEventListener('click', () => animation.reverse());
