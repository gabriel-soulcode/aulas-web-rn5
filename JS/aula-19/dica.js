const nomes = [
    "João",
    "Victor",
    "Carol",
    "Amanda",
    "Jéssica",
    "Daniel",
];

const lista = document.querySelector("#nomes");

for (let nome of nomes) {
    // criar uma nova tag <li>
    const item = document.createElement("li");
    // definir o nome como conteudo da tag <li>
    item.innerHTML = nome;
    // adicionar tag <li> no final da tag <ul>
    lista.append(item);
    // configurar o evento de click na tag <li>
    item.addEventListener("click", () => {
        abrirCaixa(nome);
    });
}

function abrirCaixa(nome) {
    alert(nome);
}