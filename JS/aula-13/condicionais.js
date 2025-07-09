let idade = 12;

if (idade >= 18) { // escopo
    console.log("Maior de idade.");
} else {
    console.log("Menor de idade.");
}

// entrar em parque de diversões
let altura = 145;
let funcionario = false;

if (altura >= 150 || funcionario) {
    console.log("Catraca aberta.");
} else {
    console.log("Catraca fechada.");
}

// aprovação de alunos em uma disciplina
let nota = 3;

if (nota == 10) {
    console.log("Aprovado. Parabéns!");
} else if (nota >= 7) {
    console.log("Aprovado.");
} else if (nota >= 5) {
    console.log("Prova final.");
} else {
    console.log("Reprovado.");
}

// Operador Ternário
// 3 + 4
// !false
// expressao ? valor x : valor y

let estoque = 10;
console.log(estoque > 0 ? "Estoque disponivel" : "Estoque insuficiente");


let ativo = false;
let texto = ativo ? "SIM" : "NÃO";
console.log("Usuário está ativo?", texto);

// selecionar dia da semana

let dia = 7;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Este dia não existe.");
}

// categorias de cores

let cor = "vermelho";

switch (cor) {
    case "azul":
    case "vermelho":
    case "amarelo":
        console.log("Cor Primária");
        break;
    case "verde":
    case "laranja":
    case "roxo":
        console.log("Cor Secundária");
        break;
}

// numeros de 1 a 5
// iteração -> repetição

for (let i = 1; i <= 5; i++) {
    console.log("O numero atual é", i);
}

// contagem regressiva

for (let i = 10; i >= 1; i--) {
    console.log("Lançamento em", i);
}

for (let i = 0; i < 5; i++) {
    let asteriscos = "";
    
    for (let j = 0; j < 5; j++) {
        asteriscos += "*";
    }

    console.log(asteriscos);
}

// for in

let aluno = { nome: "Gabriel", idade: 32, curso: "Computação" };
for (let propriedade in aluno) {
    // console.log(aluno[propriedade]);
    console.log(propriedade);
}

let nomes = ["Caio", "Ana", "João", "Maria"];

for (let indice in nomes) {
    console.log(indice);
}

// for of

for (let nome of nomes) { // for each
    console.log(nome);
}

let aula = "JavaScript";

for (let letra of aula) {
    console.log(letra);
}

// while

let i = 0;
while (i <= 10) {
    console.log(i);
    i += 2;
}

// while (true) {
//     let numero = window.prompt("Digite um número:");
//     let sorteado = 10;

//     if (numero == sorteado) {
//         break;
//     }
// }