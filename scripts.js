// cria boxes
const boxPixels = document.querySelector('#pixel-board');
for (let i = 25; i > 0; i -= 1) {
  const boxes = document.createElement('div');
  boxes.className = 'pixel';
  boxPixels.appendChild(boxes);
}
const boxesboxes = document.querySelectorAll('.pixel');

const selectedButtons = document.querySelectorAll('.color');
function changeSelected(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  const select = event;
  select.target.classList.add('selected');
}
for (let i = 0; i < selectedButtons.length; i += 1) {
  selectedButtons[i].addEventListener('click', changeSelected);
}
// pintar pixels
// referencia : https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
function changeBoxColor(event) {
  const colore = document.querySelector('.selected');
  const cor = window.getComputedStyle(colore).getPropertyValue('background-color');
  const boxSelected = event;
  boxSelected.target.style.backgroundColor = cor;
}
for (let i = 0; i < boxesboxes.length; i += 1) {
  boxesboxes[i].addEventListener('click', changeBoxColor);
}
const clearButton = document.querySelector('#clear-board');
// limpar tudo
function clearBox() {
  const pintedBoxes = document.querySelectorAll('.pixel');
  for (let i = 0; i < pintedBoxes.length; i += 1) {
    pintedBoxes[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBox);
// requisito 10 - usuario define tamanho
const btnGenerator = document.getElementById('generate-board');
function generateBoard(valor) {
  const largura = `${40 * valor}px`;
  const altura = `${40 * valor}px`;
  let cont = valor;
  cont *= cont;
  for (let i = 0; i < cont; i += 1) {
    const boxes = document.createElement('div');
    boxes.className = 'pixel';
    boxes.addEventListener('click', changeBoxColor);
    boxPixels.appendChild(boxes);
    boxPixels.style.width = largura;
    boxPixels.style.height = altura;
  }
}
function removerchildrens() {
  const allBox = document.querySelectorAll('.pixel');
  for (let i = 0; i < allBox.length; i += 1) {
    boxPixels.removeChild(allBox[i]);
  }
}
function conferirValor() {
  removerchildrens();
  let valor = document.querySelector('input').value;
  if (valor === '') {
    alert('Board inválido!');
  } else if (valor < 5) {
    valor = 5;
    generateBoard(valor);
  } else if (valor > 50) {
    valor = 50;
    generateBoard(valor);
  } else {
    generateBoard(valor);
  }
}
btnGenerator.addEventListener('click', conferirValor);

// requisito 12 https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function gerarcor() {
  const cores = document.querySelectorAll('.color');
  for (let i = 1; i < cores.length; i += 1) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    const corRGB = `rgb(${r},${g},${b})`;
    cores[i].style.backgroundColor = corRGB;
  }
}
window.onload = gerarcor;
