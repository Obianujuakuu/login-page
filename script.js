const signupText = document.querySelector('.signup-text a');
const form = document.getElementById('sign-in');

signupText.addEventListener('click', (event) => {
    event.preventDefault();
    form.scrollIntoView({ behavior: 'smooth' });
});


const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const  passwordError = document.getElementById("password-error");

  function validatePassword() {
    if (password.value != confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
      passwordError.innerHTML = "Passwords do not match";
      password.style.border = "2px solid red";
      confirmPassword.style.border = "2px solid red";
    } else {
      confirmPassword.setCustomValidity("");
      passwordError.innerHTML = "";
      password.style.border = "2px solid green";
      confirmPassword.style.border = "2px solid green";
    }
  }

  password.onchange = validatePassword;
  confirmPassword.onkeyup = validatePassword;
