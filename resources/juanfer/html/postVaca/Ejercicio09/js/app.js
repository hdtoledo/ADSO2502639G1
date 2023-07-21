const date = document.getElementById('date')
const time = document.getElementById('time')

const submit = document.getElementById('btn-submit')

const intervalCount = () => {
    let intervalHtml = setInterval(() => {
        const fechaObjetivo = new Date(`${date.value}T${time.value}`)
        const ahora = new Date().getTime()
        const tiempoRestante = fechaObjetivo - ahora

        if (tiempoRestante <= 0) {
            clearInterval(intervalHtml);
            document.getElementById("temporizador").innerHTML = "¡Tiempo terminado!";
        } else {
            const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            document.getElementById("temporizador").innerHTML = `
            <p>Tiempo restante:</p>
            <p>${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos</p>
        `;
        }
    }, 1000)
}

submit.addEventListener('click', intervalCount)
