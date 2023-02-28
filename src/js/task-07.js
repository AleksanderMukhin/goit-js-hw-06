const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputSize.addEventListener('input', () => {
  const size = inputSize.value;
console.log(size)
  text.style.fontSize = `${size}px`;
}  
)
