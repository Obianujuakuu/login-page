function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('password-match-message');
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('error')
        message.innerHTML = 'Passwords do not match.';
        message.style.color = 'red';
    } else {
        confirmPassword.classList.remove('error')
        message.innerHTML = 'Password matches';

    }
}

const signupText = document.querySelector('.signup-text a');
const form = document.getElementById('sign-in');

signupText.addEventListener('click', (event) => {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
});