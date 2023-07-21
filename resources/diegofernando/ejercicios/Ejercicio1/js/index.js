function validateForm() {
    // Obtener referencias a los campos y los mensajes de error
    var nameInput = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    if (nameInput.value === "") {
      nameError.textContent = "Por favor, ingresa tu nombre";
      nameInput.focus();
      return false;
    }

    if (emailInput.value === "") {
      emailError.textContent = "Por favor, ingresa tu correo electrónico";
      emailInput.focus();
      return false;
    }

    if (passwordInput.value === "") {
      passwordError.textContent = "Por favor, ingresa tu contraseña";
      passwordInput.focus();
      return false;
    }

    return true;
  }