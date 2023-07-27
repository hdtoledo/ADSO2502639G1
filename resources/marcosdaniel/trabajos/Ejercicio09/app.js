function startCountdown() {
    const countdownDateInput = document.getElementById("countdown-date");
    const countdownDate = new Date(countdownDateInput.value).getTime();
  
    if (isNaN(countdownDate)) {
      alert("Fecha inválida. Por favor, selecciona una fecha válida.");
      return;
    }
  
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      if (distance <= 0) {
        clearInterval(countdownTimer);
        updateCountdownDisplay(0, 0, 0, 0);
        alert("¡El temporizador ha terminado!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        updateCountdownDisplay(days, hours, minutes, seconds);
      }
    }, 1000);
  }
  
  function updateCountdownDisplay(days, hours, minutes, seconds) {
    document.getElementById("days").textContent = padNumber(days);
    document.getElementById("hours").textContent = padNumber(hours);
    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(seconds);
  }
  
  function padNumber(number) {
    return number.toString().padStart(2, "0");
  }
  