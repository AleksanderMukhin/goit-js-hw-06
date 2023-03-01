function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('[type="number"]');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount)
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();   
    
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;    

    boxes.append(box);
    size += 10;
  }  
}

destroyBtn.addEventListener('click', () => {
  boxes.remove();
});