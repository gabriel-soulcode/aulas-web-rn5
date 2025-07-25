const form = document.querySelector("#form");
const table = document.querySelector("#table");
const inputNome = document.querySelector("#nome");
const inputPreco = document.querySelector("#preco");
const inputQuant = document.querySelector("#quantidade");

const baseUrlApi = "https://api-nodejs-344f.onrender.com";

async function preencherTabela() {
    const response = await axios.get(`${baseUrlApi}/produtos`);
    const produtos = response.data;
    table.innerHTML = "";
    for (let produto of produtos) {
        const linha = document.createElement("tr");
        const cellId = document.createElement("td");
        const cellNome = document.createElement("td");
        const cellPreco = document.createElement("td");
        const cellQuant = document.createElement("td");
        const cellDel = document.createElement("td");

        const btnDel = document.createElement("button");
        btnDel.innerHTML = "Excluir";
        btnDel.classList.add("btn", "btn-danger");
        btnDel.addEventListener("click", () => excluirProduto(produto.id));

        cellId.innerHTML = produto.id;
        cellNome.innerHTML = produto.name;
        cellPreco.innerHTML = "R$ " + produto.preco;
        cellQuant.innerHTML = produto.quantidade;

        cellDel.append(btnDel);
        linha.append(cellId, cellNome, cellPreco, cellQuant, cellDel);
        table.append(linha);
    }
}

preencherTabela();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = inputNome.value;
    const preco = Number(inputPreco.value);
    const quantidade = Number(inputQuant.value);
    const produto = { name, preco, quantidade };
    cadastrarProduto(produto);
});

async function cadastrarProduto(produto) {
    await axios.post(`${baseUrlApi}/produtos`, produto);
    preencherTabela();
}

async function excluirProduto(id) {
    const check = confirm("Tem certeza que deseja excluir?");
    if (check) {
        await axios.delete(`${baseUrlApi}/produtos/${id}`);
        preencherTabela();
    }
}