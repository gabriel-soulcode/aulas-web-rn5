const cidades = document.querySelector("#cidades");

function preencherNaTela(dados) {
    cidades.innerHTML = "";
    for (let item of dados) {
        cidades.innerHTML += `<li>${item.nome}</li>`;
    }
}

const urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios";

async function buscarDadosIBGE() {
    try {
        cidades.innerHTML = "<div class='spinner-border'></div>";  // carregando
        const resposta = await fetch(urlCidades);
        const dados = await resposta.json();
        preencherNaTela(dados);
    } catch (erro) {
        console.error(erro);
        cidades.innerHTML = "Houve um erro!";
    }
}

buscarDadosIBGE();


// const promessa = fetch(urlCidades);
// promessa.then((resposta) => {
//     const promessa = resposta.json();
//     promessa.then((dados) => {
//         preencherNaTela(dados);
//     });
// }).catch((erro) => {
//     console.error(erro);
//     cidades.innerHTML = "Houve um erro!";
// });



// JSON (JavaScript Object Notation)
