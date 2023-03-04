const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length');
const validInput = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const inputLength = input.value.length;

  console.log(Number(validLength));
  console.log(inputLength);

  if (Number(validLength) !== inputLength) {
    validInput.classList.add('invalid');
    validInput.classList.remove('valid');
    
  } else {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  }  
}    
  )