function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }
    
    return true;
  }