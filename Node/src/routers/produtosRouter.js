import express from "express";
import app from "../firebase/app.js";
import { getFirestore } from "firebase-admin/firestore";

const produtosRouter = express.Router();
const db = getFirestore(app);

produtosRouter.get("/produtos", async (req, res) => {
    const documents = await db.collection("produtos").get();
    const produtos = [];
    documents.forEach(doc => {
        const produto = doc.data();
        produtos.push({ ...produto, id: doc.id });
    });
    res.status(200).json(produtos);
});

produtosRouter.get("/produtos/:id", async (req, res) => {
    const id = req.params.id;
    const doc = await db.collection("produtos").doc(id).get();
    const dados = doc.data();

    if (dados) {
        return res.status(200).json(dados);
    } else {
        return res.status(404).json({ msg: "Produto não encontrado." });
    }
});

produtosRouter.post("/produtos", async (req, res) => {
    const produto = req.body;
    await db.collection("produtos").add(produto);
    return res.status(201).json({ msg: "Produto cadastrado." });
});

export default produtosRouter;