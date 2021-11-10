const inputEl = document.getElementById('name-input');
const spanInputEl = document.getElementById('name-output');


inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    event.currentTarget.value.length > 0 ?    
        spanInputEl.textContent = event.currentTarget.value
        :spanInputEl.textContent = 'Anonymous';

}
