document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateSignUpForm();
    });

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateSignInForm();
    });

    function validateSignUpForm() {
        const nameInput = document.querySelector('.sign-up input[placeholder="Name"]');
        const emailInput = document.querySelector('.sign-up input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-up input[placeholder="Password"]');
        const dateInput = document.querySelector('.sign-up input[type="date"]');
        const genderInputs = document.querySelectorAll('.sign-up input[name="select_gender"]');

        clearErrorMessages(signUpForm);

        let errors = [];

        if (!validateNotEmpty(nameInput, 'Name')) errors.push({ input: nameInput, message: 'Name mező nem lehet üres.' });
        if (!validateNotEmpty(emailInput, 'Email')) errors.push({ input: emailInput, message: 'Email mező nem lehet üres.' });
        if (!validatePassword(passwordInput)) errors.push({ input: passwordInput, message: 'A jelszónak legalább 1 nagy betűt, 1 számot és legalább 7 karakter hosszúnak kell lennie.' });
        if (!validateNotEmpty(dateInput, 'Date')) errors.push({ input: dateInput, message: 'Date mező nem lehet üres.' });
        if (!validateGender(genderInputs)) errors.push({ input: genderInputs[0], message: 'Válassz nemet.' });

        if (errors.length > 0) {
            displayErrors(errors);
        } else {
            signUpForm.submit();
        }
    }

    function validateSignInForm() {
        const emailInput = document.querySelector('.sign-in input[placeholder="Email"]');
        const passwordInput = document.querySelector('.sign-in input[placeholder="Password"]');

        clearErrorMessages(signInForm);

        let errors = [];

        if (!validateNotEmpty(emailInput, 'Email')) errors.push({ input: emailInput, message: 'Email mező nem lehet üres.' });
        if (!validateNotEmpty(passwordInput, 'Password')) errors.push({ input: passwordInput, message: 'Password mező nem lehet üres.' });

        if (errors.length > 0) {
            displayErrors(errors);
        } else {
            signInForm.submit();
        }
    }

    function validateNotEmpty(input, fieldName) {
        if (input.value.trim() === '') {
            return false;
        }
        return true;
    }

    function validatePassword(passwordInput) {
        const password = passwordInput.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{7,}$/;

        if (!passwordRegex.test(password)) {
            return false;
        }
        return true;
    }

    function validateGender(genderInputs) {
        const selectedGender = Array.from(genderInputs).find(input => input.checked);

        if (!selectedGender) {
            return false;
        }
        return true;
    }

    function displayErrors(errors) {
        errors.forEach(error => {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.style.fontSize = '8px';
            errorMessage.style.color = 'red';
            errorMessage.innerText = error.message;
            error.input.parentNode.insertBefore(errorMessage, error.input.nextSibling);
        });
    }

    function clearErrorMessages(form) {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
    }
});
