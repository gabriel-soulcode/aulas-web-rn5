const cidades = [
    "São Paulo", 
    "Rio de Janeiro", 
    "Belo Horizonte"
];

console.log(cidades[2]);

cidades[2] = "Recife";

console.log(cidades[2]);

// uma matriz pode armazenar varios tipos

const nuncaFacaIsso = ["Fulano", 15, true, [1, 2, 3]];

console.log(nuncaFacaIsso);

// matriz bidimensional

const matriz = [
    [1, 2, 3, 4],
    [6, 7, 8, 9],
    [3, 4, 5, 6],
];

console.log(matriz[1][3]); // 9

// ["A", "B", "C", "D", "E", "F"]
//   1    2    3    4    5    6   (posição)
//   0    1    2    3    4    5   (indice)

const alunos = ["Elisa", "Emily", "Gustavo"];

console.log(alunos);

console.log(alunos.length); // tamanho

const ultimoIndice = alunos.length - 1;
console.log(alunos[ultimoIndice]); // ultimo

alunos.push("Jaqueline"); // adiciona fim

console.log(alunos);

alunos.pop(); // remove fim

console.log(alunos);

let nome = "JavaScript";
console.log(nome[4]); // S

alunos.forEach((aluno) => {
    console.log(aluno);
});

const novosAlunos = alunos.map((aluno) => {
    return aluno + " Braga";
});

console.log(alunos);
console.log(novosAlunos);

const numeros = [5, 7, 2, 9, 0];

const dobros = numeros.map((n) => n*2);

console.log(numeros);
console.log(dobros);

const filtro = numeros.filter((n) => n % 2 == 1)
console.log(filtro);

const quadrados = filtro.map((n) => n**2);
console.log(quadrados);

const elemento = numeros.find((n) => n > 6);
console.log(elemento);

const todos = numeros.filter(() => true);

console.log(alunos);

const presente = alunos.includes("Emily");

console.log(presente ? "SIM" : "NÃO");

const frutas = ["Banana", "Morango", "Abacaxi"];
console.log(frutas)
console.log(frutas.sort());

const nums = [10, 7, 4, 12, 6];
console.log(nums.sort()); // 4  6 7 10 12

frutas.forEach((fr) => {
    console.log("Vou comer " + fr)
})

for (let i = 0; i < frutas.length; i++) {
    console.log("Vou comer " + frutas[i]);
}

for (let fruta of frutas) {
    console.log("Vou comer " + fruta);
}