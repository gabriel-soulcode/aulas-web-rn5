console.log(document); // objeto que representa a página (HTML)

const imgs = document.getElementsByTagName("img");
const cards = document.getElementsByClassName("card");
const carrossel = document.getElementById("carrossel");

console.log(imgs);
console.log(cards);
console.log(carrossel);

const linksFooter = document.querySelectorAll("footer .nav-link"); // retorna uma lista de objetos
const main = document.querySelector("main"); // retorna objeto referente ao elemento

console.log(linksFooter);
console.log(main);


const titulo = document.querySelector(".navbar-brand");
titulo.innerHTML += " <b>Plataforma Educacional</b>";
titulo.href = "https://soulcode.com";
titulo.style.color = "#336ee3";
titulo.style.fontSize = "2rem";
titulo.setAttribute("target", "_blank");

const lista = [
    "TechSolutions",
    "CodeMaster Academy",
    "InovaTech",
    "DigitalBoost",
    "CloudNinja",
    "WebDevPro",
    "StartUp Power",
    "DevTools Co.",
    "FullStack Partner",
    "NextGen Learning",
    "SoulCode Academy"
];

const patrocinadores = document.querySelector("#patrocinadores");

for (let item of lista) {
    const card = "<div class='card p-3'>" + item + "</div>";
    patrocinadores.innerHTML += card;
}


const semaforos = [
    "./images/semaforo-1.png", // 0 vermelho
    "./images/semaforo-2.png", // 1 amarelo
    "./images/semaforo-3.png"  // 2 verde
];

let indice = 0;
const semaforo = document.querySelector("#semaforo");

setInterval(() => {
    if (indice == 0) {
        indice = 1;
    }
    else if (indice == 1) {
        indice = 2;
    }
    else {
        indice = 0;
    }
    semaforo.src = semaforos[indice];
}, 3000);