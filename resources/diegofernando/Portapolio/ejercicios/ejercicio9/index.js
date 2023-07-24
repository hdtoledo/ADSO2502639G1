var targetDate = new Date("2023-12-31T23:59:59").getTime();

        var countdown = setInterval(function () {
            var now = new Date().getTime();

            var timeRemaining = targetDate - now;

            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            var countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = "Tiempo restante: " + days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos.";

            if (timeRemaining < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "¡Tiempo terminado!";
            }
        }, 1000);