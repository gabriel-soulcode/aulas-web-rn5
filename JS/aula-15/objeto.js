const pessoa = {
    nome: "Gabriel Braga",
    idade: 23,
    genero: "Masculino",
    email: "gabriel@soulcode.com",
    pcd: false,
};

console.log(pessoa.nome, pessoa.idade);

pessoa.idade = 24;

console.log(pessoa.nome, pessoa.idade);
console.log(pessoa['nome']);

let n1 = 4;
let n2 = n1;
n2 += 1;

console.log(n1, n2);

const obj1 = { a: 1, b: 2 };
const obj2 = obj1;

obj1.b = 5;
obj2.a = 3;

console.log(obj1, obj2);

const mat1 = [1, 2, 3];
const mat2 = [ ...mat1 ];
mat2[0] = 4;

console.log(mat1, mat2);



const livro = {
    titulo: "Sem Limites",
    autor: "Jim Kwik",
    paginas: 400
}

const copia = { ...livro }; // spread

copia.titulo = "100 Limites"

console.log(livro, copia);

const venda = {
    total: 150.60,
    data: "11/07/2025",
    pago: true,
    cliente: {
        nome: "Gabriel",
        codigo: 123
    },
    produtos: [
        "Pão Francês",
        "Panela de Pressão",
        "Guarda-chuva"
    ]
}

console.log(venda.total);
console.log(venda.cliente.nome);
console.log(venda.produtos[0]);

const contatos = [
    { tel: "99999999", nome: "Fulano" },
    { tel: "88888888", nome: "Ciclano" },
    { tel: "77777777", nome: "Beltrano" },
];

console.log(contatos[2].nome); // Beltrano