
const categoriesList = document.querySelector('#categories');
const categoriesItems = [...categoriesList.children];

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);
    const quantityCotegoriesItem = item.children.length;
    console.log(`Elements: ${quantityCotegoriesItem}`)
  });




// const categoriesList = document.querySelector('#categories');

// const categoriesItems = document.querySelectorAll('li.item');


// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   console.log(`Category: ${categoryName}`);
//   const quantityCotegoriesItem = item.querySelectorAll('li').length;
//   console.log(`Elements: ${quantityCotegoriesItem}`)
// });