const listItemEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItemEl.length}`);

listItemEl.forEach(el => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('.item li').length}`)

})
