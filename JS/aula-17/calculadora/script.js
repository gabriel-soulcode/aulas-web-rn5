const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const form = document.querySelector("#form");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);
    const soma = valor1 + valor2;

    if (Number.isNaN(soma)) {
        resultado.classList.remove("alert-primary");
        resultado.classList.add("alert-danger");
        resultado.innerHTML = "Escreva apenas números.";
    } else {
        resultado.innerHTML = `A soma é ${soma}`;
    }
    resultado.classList.remove("d-none");
});
