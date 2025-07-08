let nome = "Gabriel Braga";
let idade = 23;

console.log(nome, idade); // Gabriel Braga 23

nome = "José Davi";

console.log(nome, idade); // José Davi 23

const PI = 3.14;

// PI = 4.13; // erro

console.log(PI);

let hoje = "08/07/2025";
hoje = 872025;
hoje = true;

console.log(hoje);

let sobrenome = "Braga";
let altura = 1.75;
let peso = 67;
let ensinoSuperior = false;
let telefone;
let cpf = null;
let linguagens = ["Java", "JavaScript", "PHP"];
let endereco = { cidade: "Tianguá", estado: "CE" };

console.log(typeof sobrenome);
console.log(typeof altura);
console.log(typeof peso);
console.log(typeof ensinoSuperior);
console.log(typeof telefone);
console.log(typeof cpf);
console.log(typeof linguagens);
console.log(typeof endereco);

let numero1 = 6, numero2 = 3;

console.log(numero1, numero2); // 6 3

console.log(numero1 + numero2); // 9
console.log(numero1 - numero2); // 3
console.log(numero1 * numero2); // 18
console.log(numero1 / numero2); // 2
console.log(numero1 ** numero2); // 216
console.log(numero1 % numero2); // 0

console.log(4 * 3 / (2 + 9)); // 1.0909...

console.log(7 + 3 * 5 - 10 + 2 ** 4); // 28

let numero3 = 3;

numero3 += 4; // 7

numero3 -= 2; // 5

numero3 *= 4; // 20

numero3 /= 10; // 2

console.log(numero3); // 2

let numero4 = 8;

console.log(numero4); // 8
console.log(++numero4); // 9
console.log(numero4++); // 9

console.log(numero4--); // 10
console.log(--numero4); // 8

numero4++;
console.log(numero4); // 9

let a = 2, b = 3;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(2 === "2"); // false

console.log(0 == ""); // true ?????
console.log(0 == false); // true ?????

console.log("Gabriel" == "gabriel"); // false
console.log("ANA" == "ANA"); // true


let x = true, y = false;

// Conjunção E &&, Disjunção OU ||, Negação NÃO !

console.log(x && y); // false
console.log(x || y); // true
console.log(x && x); // true
console.log(!x); // false
console.log(!y && x); // true

console.log(5 * 3 == 21 || 60 < 34 * 2); // true
// 15 == 21 || 60 < 68
// false || true
// true
// aritmeticas > comparação > logicas