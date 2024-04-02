document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
      } else {
        errorMessage.textContent = "Signup Successful";
        form.reset();
      }
    });
  });
