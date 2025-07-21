import express from "express";

const server = express();
server.use(express.json());

const port = 3000;
const produtos = [
    {
        name: "Smart TV Samsung 32\"",
        quantidade: 2000,
        preco: 1500,
    },
    {
        name: "Notebook Acer Nitro 5",
        quantidade: 1000,
        preco: 5500,
    },
    {
        name: "Gabinete Gamer 16GB i59400",
        quantidade: 1000,
        preco: 4500,
    }
];

server.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

server.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).json({ msg: "Digite apenas numeros." });
    }

    const dados = produtos[id-1];

    if (dados) {
        return res.status(200).json(dados);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
});

server.post("/produtos", (req, res) => {
    const produto = req.body;
    produtos.push(produto);
    return res.status(201).json({ msg: "Produto cadastrado." });
});

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
    console.log(`Acesse em: http://localhost:${port}.`);
});

// HTTP
// - GET    (Buscar)
// - POST   (Salvar)
// - PUT    (Editar)
// - DELETE (Apagar)

// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
// - 500 Erro no servidor