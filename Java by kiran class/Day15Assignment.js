function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var mobileInput = document.getElementById('mobile');
    var errorMessage = document.getElementById('error-message');

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mobileRegex = /^\d+$/;

    // Check name
    if (!nameRegex.test(nameInput.value)) {
        errorMessage.textContent = 'Name should only contain alphabets';
        return;
    }

    // Check email
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Invalid email format';
        return;
    }

    // Check mobile number
    if (!mobileRegex.test(mobileInput.value)) {
        errorMessage.textContent = 'Mobile number should only contain numbers';
        return;
    }

    // If all validations pass, clear error message
    errorMessage.textContent = '';

    // You can submit the form or perform further actions here
}