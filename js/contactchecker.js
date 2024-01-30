document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        clearErrors();

        const fullName = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        let errors = [];

        if (!validateInput(fullName, "Teljes név")) errors.push({ input: fullName, message: "Teljes név nem lehet üres" });
        if (!validateEmail(email)) errors.push({ input: email, message: "Helytelen e-mail formátum" });
        if (!validatePhone(phone)) errors.push({ input: phone, message: "Helytelen telefonszám formátum" });
        if (!validateInput(subject, "Tárgy")) errors.push({ input: subject, message: "Tárgy nem lehet üres" });
        if (!validateInput(message, "Üzenet")) errors.push({ input: message, message: "Üzenet nem lehet üres" });

        if (errors.length > 0) {
  
            displayErrors(errors);
        } else {

            Swal.fire({
                title: "Üzenet elküldve az ügyfélszolgálatnak!",
                text: "Hamarosan felvesszük önnel a kapcsolatot!",
                icon: "success"
            });
        }
    }

    function validateInput(input, fieldName) {
        if (input.value.trim() === '') {
            return false;
        }
        return true;
    }

    function validateEmail(input) {
        const emailValue = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(emailValue);
    }

    function validatePhone(input) {
        const phoneNumber = input.value.trim();
        const phoneRegex = /^(?:\+36|06)[0-9]{9}$/;

        return phoneRegex.test(phoneNumber);
    }

    function displayErrors(errors) {
        errors.forEach(error => {
            const errorDiv = document.createElement("div");
            errorDiv.className = "error-message";
            errorDiv.innerText = error.message;


            error.input.parentNode.appendChild(errorDiv);

   
            error.input.style.borderColor = 'red';
        });
    }

    function clearErrors() {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.parentNode.removeChild(message));

        const inputFields = form.querySelectorAll('.item');
        inputFields.forEach(input => input.style.borderColor = '#0ef');
    }

});
