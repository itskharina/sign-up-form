let password = document.querySelector('#password')
let confirm = document.querySelector('#confirm-password')
let passwordError = document.querySelector('.password-error')
let email = document.querySelector('#email')
let emailError = document.querySelector('.email-error')

// checks if password and confirm password are the same
function check() {
    if (password.value === confirm.value) {
        confirm.style.outline = "none"
        passwordError.textContent = ""
    } else {
        confirm.style.outline = "1px solid red"
        passwordError.textContent = "*Passwords must match"
    }
}

// stops the outlines from css from disappearing/overlapping with the ones created in js when input is focused  
confirm.addEventListener("focus", (e) => {
    e.target.style.outline = "1px solid #E5E7EB"
});

confirm.addEventListener("blur", (e) => {
    if (password.value === confirm.value) {
        e.target.style.outline = "none"
    } else {
        e.target.style.outline = "1px solid red"
    }
});

email.addEventListener("input", function (e) {
    if (email.validity.typeMismatch) {
        emailError.textContent = "*Please enter a valid email";
    } else {
        emailError.textContent = '';
    }
})