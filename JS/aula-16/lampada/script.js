const lampada = document.querySelector("#lampada");

const lampadaAcesa = "./images/lampada-acesa.png";
const lampadaApaga = "./images/lampada-apagada.png";

let apagada = true;

setInterval(() => {
    if (apagada) {
        lampada.src = lampadaAcesa;
        document.body.style.backgroundColor = "white";
    } else {
        lampada.src = lampadaApaga;
        document.body.style.backgroundColor = "#181818";
    }
    apagada = !apagada;
}, 2000);