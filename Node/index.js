import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
    res.status(200).send("Sistema de Estoque");
});

server.get("/sistema", (req, res) => {
    const dados = {
        author: "Gabriel Braga",
        description: "Sistema de controle de estoque",
        version: "1.0.0"
    };
    res.status(200).json(dados);
});

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
    console.log(`Acesse em: http://localhost:${port}.`);
});

// HTTP (GET, POST, PUT, DELETE)
// HTTP status
// - 200 Sucesso
// - 201 Salvo com sucesso
// - 400 Requisição Inválido
// - 401 Não autorizado 
// - 404 Não encontrado
// - 500 Erro no servidor