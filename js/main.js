
const modalAuth = document.querySelector('.modal-auth');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const logInForm = document.getElementById('logInForm');
const closeAuthButton = document.querySelector('.close-auth');
const authButton = document.querySelector('.button-auth');


let scrollPosition = 0;


function openModalAuth() {
    scrollPosition = window.scrollY;
    modalAuth.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}


function closeModalAuth() {
    modalAuth.classList.remove('active'); 
    document.body.style.overflow = ''; 
    window.scrollTo(0, scrollPosition); 
    clearErrorStyles(); 
}

function clearErrorStyles() {
    loginInput.classList.remove('error');
    passwordInput.classList.remove('error');
}


function validateInputs() {
    let isValid = true;

    if (!loginInput.value.trim()) {
        loginInput.classList.add('error');
        isValid = false;
    } else {
        loginInput.classList.remove('error');
    }

    if (!passwordInput.value.trim()) {
        passwordInput.classList.add('error');
        isValid = false;
    } else {
        passwordInput.classList.remove('error');
    }

    return isValid;
}


authButton.addEventListener('click', () => {
    openModalAuth();
});


closeAuthButton.addEventListener('click', () => {
    closeModalAuth();
});


modalAuth.addEventListener('click', (event) => {
    if (event.target === modalAuth) {
        closeModalAuth();
    }
});


logInForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (validateInputs()) {
        alert('Авторизація успішна!');
        closeModalAuth();
    } else {
        alert('Заповніть всі поля!');
    }
});
