const listItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemEl.length}`);


const animalsEl = listItemEl[0].querySelector('h2');
console.log(`Category: ${animalsEl.textContent}`);
console.log(`Elements: ${listItemEl[0].querySelectorAll('li').length}`)

const productsEl = listItemEl[1].querySelector('h2');
console.log(`Category: ${productsEl.textContent}`);
console.log(`Elements: ${listItemEl[1].querySelectorAll('li').length}`)

const technologiesDef = listItemEl[2].querySelector('h2');
console.log(`Category: ${technologiesEl.textContent}`);
console.log(`Elements: ${listItemEl[2].querySelectorAll('li').length}`)


// const animalsSumDef = listItemDef[0].querySelectorAll('li');
// console.log(`Elements: ${animalsDef.length}`)
// console.log(`Elements: ${animalsSumDef.length}`);

// const items = document.querySelectorAll('.item');
// console.log(items);
// for (let item of items) {
    
// }

