const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordError = document.querySelector('.password-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const submit = document.querySelector('.submit');
const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phone-error');

submit.addEventListener('click', checkValidity);
password.addEventListener('change', checkPassword);
confirmPassword.addEventListener('change', checkPassword);
email.addEventListener('input', checkEmail);
phone.addEventListener('input', checkPhone);

function checkValidity(e) {
  if (password.value !== confirmPassword.value) {
    alert('Please make sure your passwords match!');
    e.preventDefault();
    return;
  }

  if (!/^[0-9]{11}$/.test(phone.value)) {
    alert('Please enter a valid UK phone number!');
    e.preventDefault();
    return;
  }

  if (!password.value || !confirmPassword.value) {
    alert('Please enter a password!');
    e.preventDefault();
    return;
  }
}

function checkPassword() {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.border = '1px solid #E5E7EB';
    passwordError.textContent = '';
  } else {
    confirmPassword.style.border = '1px solid red';
    passwordError.textContent = '*Passwords must match!';
  }
}

function checkEmail() {
  if (email.validity.typeMismatch) {
    emailError.textContent = '*Enter a valid email';
    email.style.border = '1px solid red';
  } else {
    emailError.textContent = '';
    email.style.border = '1px solid #E5E7EB';
  }
}

function checkPhone() {
  if (/^[0-9]{11}$/.test(phone.value)) {
    phoneError.textContent = '';
    phone.style.border = '1px solid #E5E7EB';
  } else {
    phoneError.textContent = '*Enter a valid UK phone number';
    phone.style.border = '1px solid red';
  }
}
