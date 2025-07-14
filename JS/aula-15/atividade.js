// Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console:
// "Olá, [nome]!"
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}
saudacao("Bruna");

// Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.
function soma(n1, n2) {
    return n1 + n2;
}
const total = soma(12, 5);
console.log(total);

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.
function ehPar(num) {
    return (num % 2 == 0);
}
console.log(ehPar(14) ? "PAR" : "IMPAR");
console.log(ehPar(17) ? "PAR" : "IMPAR");

// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).
function fatorial(fat) {
    let resultado = 1;
    for (let i = fat; i >= 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(6));

// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// Crie uma função que receba dois números e retorne o maior deles.
function maior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(maior(78, 56));

// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.
function media(nums) {
    let soma = 0;
    for (let n of nums) {
        soma += n;
    }
    const resultado = soma / nums.length;
    return resultado;
}

const nums = [4, 7, 9, 12, 17, 3, 8];
console.log(media(nums));

console.log(media([7, 8, 9]));

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").
function inverter(texto) {
    let invertida = "";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        invertida = letra + invertida;
    }
    return invertida;
}

console.log(inverter("Socorram-me subi no ônibus em marrocos"));

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.
const nomes = ["Laura", "Greison", "Milena", "Fernanda", "Kaio"];
const ultimo = nomes.length - 1;
console.log(nomes[0], nomes[ultimo]);

// Crie um array de frutas. Adicione duas novas fruta.
const frutas = ["Abacaxi", "Manga", "Tomate"];
frutas.push("Goiaba", "Abacate"); // adiciona duas frutas no final da matriz
console.log(frutas);

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.
nomes.sort();
console.log(nomes);

// Dado um array de números, verifique se o número 10 está presente.
const listaNumeros = [5, 8, 2, 19, 22, 89, 10];
console.log(listaNumeros.includes(10));

// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.
let resultado = 0;
for (let n of listaNumeros) {
    resultado += n;
}
console.log(resultado);

// Dado um array de números, crie um novo array com apenas os números pares.
const pares = listaNumeros.filter(ehPar);
console.log(pares);

// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.
const pessoa = {
    nome: "Greison",
    idade: 25,
    cidade: "Rio de Janeiro"
};
console.log(pessoa.nome, pessoa.idade, pessoa.cidade);

// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.
pessoa.profissao = "Professor";
console.log(pessoa);

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.
const alunos = [
    { nome: "Emily", nota1: 9.5, nota2: 10 },
    { nome: "Monica", nota1: 5, nota2: 10 },
    { nome: "Elisa", nota1: 10, nota2: 10 }
];
console.log(alunos);
console.log(alunos[1].nome);

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.
alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(aluno.nome, media);
});

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
// "Carro: [marca] [modelo]"

function formatarNomeCarro(carro) {
    return "Carro: " + carro.marca + " " + carro.modelo;
}

const nomeCarro = formatarNomeCarro({ marca: "Chevrolet", modelo: "S10" });

console.log(nomeCarro);

// Questionamento do if com ;

let i = 3;
if (i > 3); {
    console.log("Maior");
}

