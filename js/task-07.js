const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const size = inputSize.value;
  text.style.fontSize = `${size}px`;

inputSize.addEventListener('input', () => {
  const size = inputSize.value;
console.log(size)
  text.style.fontSize = `${size}px`;
}  
)
