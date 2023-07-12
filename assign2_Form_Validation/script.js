document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const dateInput = document.getElementById('date');
    const colorInput = document.getElementById('color');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        // Submit the form
        console.log('Form submitted successfully');
        form.reset();
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Clear previous error messages
      clearErrorMessages();
  
      // Validate name
      if (nameInput.value.trim() === '') {
        isValid = false;
        displayErrorMessage('name', 'Name is required');
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        isValid = false;
        displayErrorMessage('email', 'Invalid email format');
      }
  
      // Validate phone number
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phoneInput.value)) {
        isValid = false;
        displayErrorMessage('phone', 'Invalid phone number format');
      }
  
      // Validate password
      if (passwordInput.value.length < 6) {
        isValid = false;
        displayErrorMessage('password', 'Password must be at least 6 characters long');
      }
  
      // Validate age
      if (ageInput.value < 18) {
        isValid = false;
        displayErrorMessage('age', 'You must be at least 18 years old');
      }
  
      // Validate gender
      if (genderSelect.value === '') {
        isValid = false;
        displayErrorMessage('gender', 'Gender is required');
      }
  
      // Validate date
      if (dateInput.value === '') {
        isValid = false;
        displayErrorMessage('date', 'Date is required');
      }
  
      // Validate color
      if (colorInput.value === '') {
        isValid = false;
        displayErrorMessage('color', 'Color is required');
      }
  
      return isValid;
    }
  
    function displayErrorMessage(inputName, message) {
      const errorElement = document.getElementById(`${inputName}Error`);
      errorElement.textContent = message;
    }
  
    function clearErrorMessages() {
      const errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(errorElement => {
        errorElement.textContent = '';
      });
    }
  });
  