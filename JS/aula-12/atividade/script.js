// Declare três variáveis chamadas nome, idade e altura. Atribua valores a elas e exiba uma frase como:
// "Meu nome é João, tenho 25 anos e minha altura é 1.75m."
let nome = 'Clara Beatriz';
let idade = 1;
let altura = 0.5;
console.log("Meu nome é", nome, ", tenho", idade, "anos e minha altura é", altura, "m.");

// Crie duas variáveis numero1 e numero2. Some os dois valores e exiba o resultado no console com a frase:
// "A soma é: 15" (troque 15 pelo valor real da soma).
let numero1 = 45, numero2 = 16;
let soma = numero1 + numero2;
console.log("A soma é:", soma);

// Declare três variáveis com números decimais e calcule a média entre eles.
let a = 4.5, b = 3.9, c = 8.1;
let media = (a + b + c) / 3;
console.log(media);

// Dado os valores a = 10, b = 5 e c = 2, calcule o resultado da expressão: (a + b) * c / 2
// Mostre o resultado no console.
a = 10;
b = 5;
c = 2;
console.log((a + b) * c / 2);

// Crie uma variável idade e verifique se o valor é maior ou igual a 18 usando o operador de comparação.
// Exiba uma mensagem: "É maior de idade: true/false".
idade = 10;
let maiorIdade = idade >= 18;
console.log("É maior de idade:", maiorIdade);

// Declare duas variáveis com valores diferentes. Troque os valores entre elas e mostre os novos valores no console.
let x = 5;
let y = 7;
let aux;
console.log(x, y);

aux = x;
x = y;
y = aux;
console.log(x, y);

// Crie uma variável dividendo com valor 50 e uma divisor com valor 0. Tente fazer a divisão e observe o resultado.
let dividendo = 50;
let divisor = 0;
let divisao = dividendo / divisor;
console.log(divisao); // Infinity
console.log("abc" / 2); // Not a Number

console.log(typeof Infinity);
console.log(typeof NaN);

// Crie uma variável contador com valor 10. Use os operadores de incremento e decremento (++ e --) para somar 1 e depois subtrair 1, mostrando os valores após cada operação.
let contador = 10;
contador++; // Incremento
console.log(contador);
contador--; // Decremento
console.log(contador);

// Conversão Explicita de string -> number
let numeroString = "1024";
let numero = Number(numeroString);

console.log(numeroString);
console.log(numero);

console.log(typeof numeroString);
console.log(typeof numero);