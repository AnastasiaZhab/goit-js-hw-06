const inputEl = document.getElementById('font-size-control');
const labelEl = document.getElementById('text');
console.log(inputEl);
console.log(labelEl);


inputEl.addEventListener('input', onInputChange)

function onInputChange() {
    console.log(inputEl.value);
    labelEl.style.fontSize = inputEl.value +'px';
console.log(labelEl.style)
}