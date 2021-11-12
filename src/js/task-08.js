const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // const email = event.currentTarget.elements.email.value;
    // const password = event.currentTarget.elements.password.value;
    
    const elements = event.currentTarget.elements;
    
    const email = elements.email.value;
    const password = elements.password.value;

    if (email === '' || password === '') {
        window.alert('Милый друг, заполни все поля, пожалуйста :)');
    }
    else {
    
        const formData = {
            email,
            password
        }
        console.log(formData);
    }
}
