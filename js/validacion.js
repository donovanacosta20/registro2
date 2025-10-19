const form = document.querySelector('.needs-validation');
const checkTerminos = document.getElementById('terminos');
const errorTerminos = document.getElementById('errorTerminos');
const btnTerminos = document.getElementById('btnTerminos');

form.addEventListener('submit', event => {
    const [nombre, apellido, email, password1, password2] = form.elements;
    passwordValidate(password1, password2)
    if (!checkTerminos.checked) {
        errorTerminos.style.display = 'block'
        checkTerminos.classList.add('is-invalid')
        btnTerminos.classList.add('no-valid')
    }
    if (!form.checkValidity() || !checkTerminos.checked) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
}, false);


function passwordValidate(password1, password2) {
    if (password2.value !== password1.value) {
        password2.classList.add('is-invalid');
        password2.setCustomValidity('Las contrase;as no coiciden')
        password2.reportValidity();

        return;
    }
    password2.setCustomValidity('')
    password2.classList.add('is-valid')
    password2.classList.remove('is-invalid');
}

checkTerminos.addEventListener('change', (event) => {
    if (event.target.checked) {
        checkTerminos.classList.remove('is-invalid');
        checkTerminos.classList.add('is-valid');
        errorTerminos.style.display = 'none';
        btnTerminos.classList.add('valid');
        btnTerminos.classList.remove('no-valid');
    } else {
        checkTerminos.classList.remove('is-valid');
        checkTerminos.classList.add('is-invalid');
        errorTerminos.style.display = 'block';
        btnTerminos.classList.add('no-valid');
        btnTerminos.classList.remove('valid');
    }
})