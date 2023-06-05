const input = document.querySelector("input")
const outputerror = document.querySelector(".men-error");
const send = document.querySelector(".sendbtn");
const output = document.querySelector("#output-mensaje");

send.addEventListener("click", function () {
    if (input.value.trim() === "") {
        outputerror.textContent = "Escribe un mensaje";
        setTimeout(function () {
            outputerror.textContent = "";
        }, 3000);

    } else {
        const datos = input.value.split(',').map(dato => dato.trim());
        output.textContent = ` ${datos.join(',')}`;
    }
    input.value = "";
});