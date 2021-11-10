const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

        console.log(inputEl.value.length);
        console.log(inputEl.dataset.length);
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}