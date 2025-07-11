const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios";

const promessa = fetch(url);

promessa.then((resposta) => {

    const promessaJson = resposta.json();

    promessaJson.then((dados) => {
        console.log(dados);
    });

});

console.log("Final do código.");