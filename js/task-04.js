let counterValue = 0;

const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');


addListenerBtn.addEventListener("click", () =>
  value.textContent = counterValue += 1);

removeListenerBtn.addEventListener("click", () =>
  value.textContent = counterValue -= 1);