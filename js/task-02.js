const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(ingridient => {
//   const liItems = document.createElement('li');
//   liItems.textContent = ingridient;
//   liItems.classList.add('item');
//   const list = document.querySelector('#ingredients');
//   list.append(liItems);
// });
  
const liItemRef = ingredients.map(ingridient => {
  const liItems = document.createElement('li');
  liItems.textContent = ingridient;
  liItems.classList.add('item');
  return liItems;
});
console.log(liItemRef);

const list = document.querySelector('#ingredients');
list.append(...liItemRef);