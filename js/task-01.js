
const categoriesList = document.querySelectorAll('#categories');
const categoriesItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);
  const quantityCotegoriesItem = item.querySelectorAll('li').length;
  console.log(`Elements: ${quantityCotegoriesItem}`)
});