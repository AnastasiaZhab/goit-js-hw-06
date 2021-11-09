const counterEl = document.getElementById('counter');
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
let valueEl = document.getElementById('value');
console.log(valueEl);
let counterValue = 0;


decrementButtonEl.addEventListener('click', onDecrementButtonClick);
incrementButtonEl.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    console.log(valueEl);
}

function onIncrementButtonClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log(valueEl);
}