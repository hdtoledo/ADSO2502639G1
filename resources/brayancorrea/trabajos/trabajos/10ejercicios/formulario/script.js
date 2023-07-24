function validarFormulario() {
    const nombres = document.getElementById("nombres").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const telefonoRegex = /^\d+$/;
}

if (nombres.trim() === "") {
    alert("Por favor, ingresa tu nombre.");
    return false;
}

if (direccion.trim() === "") {
    alert("Por favor, ingresa tu Direccion.");
    return false;
}

if (telefono.trim() === "") {
    alert("Por favor, ingresa tu telefono.");
    return false;
}