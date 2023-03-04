const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color')

btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textColor.textContent = color;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
