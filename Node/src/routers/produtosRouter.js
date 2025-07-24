import express from "express";
import { findAll, findById, remove, save, update } from "../services/produtosService.js";

const produtosRouter = express.Router();

produtosRouter.get("/produtos", async (req, res) => {
    try {
        const produtos = await findAll();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor." });
    }
});

produtosRouter.get("/produtos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await findById(id);
        if (produto) {
            return res.status(200).json(produto);
        } else {
            return res.status(404).json({ msg: "Produto não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor." });
    }
});

produtosRouter.post("/produtos", async (req, res) => {
    try {
        const produto = req.body;
        await save(produto);
        return res.status(201).json({ msg: "Produto cadastrado." });
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor." });
    }
});

produtosRouter.put("/produtos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const produto = req.body;
        const flag = await update(id, produto);
        if (flag) {
            return res.status(200).json({ msg: "Produto alterado." });
        } else {
            return res.status(404).json({ msg: "Produto não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor." });
    }
});

produtosRouter.delete("/produtos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const flag = await remove(id);
        if (flag) {
            return res.status(200).json({ msg: "Produto excluido." });
        } else {
            return res.status(404).json({ msg: "Produto não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno no servidor." });
    }
});

export default produtosRouter;

// CRUD
// Create - Criar/Cadastrar
// Read - Ler/Consultar
// Update - Atualizar
// Delete - Excluir