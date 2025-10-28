const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Reset messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty';
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
