// This file contains the JavaScript functionality for the login page.
// It handles form validation and motion graphics effects.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const collegeInput = document.getElementById('college');
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        let errors = [];

        // Validate name
        if (nameInput.value.trim() === '') {
            valid = false;
            errors.push('Name is required.');
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            valid = false;
            errors.push('Please enter a valid Gmail address.');
        }

        // Validate password
        if (passwordInput.value.length < 6) {
            valid = false;
            errors.push('Password must be at least 6 characters long.');
        }

        // Validate college name
        if (collegeInput.value.trim() === '') {
            valid = false;
            errors.push('College name is required.');
        }

        // Validate phone number
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            valid = false;
            errors.push('Phone number must be a 10-digit number.');
        }

        // Display errors or submit the form
        if (!valid) {
            errorMessage.innerHTML = errors.join('<br>');
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Here you can add the code to submit the form data to the server
            alert('Form submitted successfully!');
        }
    });
});