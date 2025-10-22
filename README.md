# Web Animations API - Exemplo de Animação

Este projeto é um exemplo prático de como usar a **Web Animations API (WAAPI)** para criar animações dinâmicas em elementos HTML. Ele demonstra controle total de animação via JavaScript, incluindo play, pause e reverse.

---

## 🔹 Estrutura do Projeto



---

## 🔹 Funcionalidades

- Quadrado animado que se move horizontalmente dentro do container  
- Mudança de cor durante o movimento  
- Opacidade variável para efeito visual  
- Controle completo da animação com botões:  
  - **Play**: iniciar ou retomar a animação  
  - **Pause**: pausar a animação  
  - **Reverse**: inverter direção da animação  
- Animação infinita com efeito alternado (ida e volta)  

---

## 🔹 Como Usar

1. Clone o repositório ou baixe os arquivos.  
2. Abra `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).  
3. Interaja com os botões para controlar a animação do quadrado.

---

## 🔹 Código de Exemplo

### JavaScript
```javascript
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

