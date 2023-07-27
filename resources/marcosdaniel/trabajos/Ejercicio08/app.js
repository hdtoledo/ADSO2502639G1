document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-area");
    const charCount = document.getElementById("char-count");
    const maxChars = 100; // Cambia este valor si deseas un límite diferente
  
    function updateCharCount() {
      const text = textArea.value;
      const remainingChars = maxChars - text.length;
      charCount.textContent = remainingChars;
  
      if (remainingChars < 0) {
        charCount.style.color = "red";
        textArea.value = text.slice(0, maxChars); // Limitar el texto a la cantidad máxima
      } else {
        charCount.style.color = "black";
      }
    }
  
    textArea.addEventListener("input", updateCharCount);
  
    // Llamar a la función inicialmente para actualizar el contador al cargar la página
    updateCharCount();
  });
  