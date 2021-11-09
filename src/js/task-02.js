const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 
const listEl = document.getElementById('ingredients');

const elements = ingredients.map(item => {

  const addItemEl = document.createElement('li');
  addItemEl.classList.add('item');
  addItemEl.textContent = item;
  return addItemEl;
});

console.log(elements);

listEl.append(...elements);




