function contarCaracteres() {
    const maxCaracteres = 1000; // Establecer aquí el número máximo de caracteres permitidos
    const texto = document.getElementById('texto').value;
    const contador = document.getElementById('contador');

    const caracteresRestantes = maxCaracteres - texto.length;
    contador.textContent = caracteresRestantes;
}