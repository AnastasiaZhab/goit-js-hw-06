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

const elements = ingredients.map(elem => {

  const addItemEl = document.createElement('li');
  addItemEl.classList.add('item');
  addItemEl.textContent = elem;
  return addItemEl;
});

console.log(elements);

listEl.append(...elements);




