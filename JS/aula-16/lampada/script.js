const lampada = document.querySelector("#lampada"); // img (lâmpada)
const botao = document.querySelector("#botao"); // button (botão)
const chave = document.querySelector("#chave"); // img (interruptor)

const lampadaAcesa = "./images/lampada-acesa.png";
const lampadaApaga = "./images/lampada-apagada.png";

const on = "./images/on.png";
const off = "./images/off.png";

let apagada = true;

botao.addEventListener("click", () => {
    if (apagada) {
        chave.src = on;
        lampada.src = lampadaAcesa;
        document.body.style.backgroundColor = "white";
    } else {
        chave.src = off;
        lampada.src = lampadaApaga;
        document.body.style.backgroundColor = "#181818";
    }
    apagada = !apagada;
});

// setInterval(() => {
//     if (apagada) {
//         lampada.src = lampadaAcesa;
//         document.body.style.backgroundColor = "white";
//     } else {
//         lampada.src = lampadaApaga;
//         document.body.style.backgroundColor = "#181818";
//     }
//     apagada = !apagada;
// }, 2000);