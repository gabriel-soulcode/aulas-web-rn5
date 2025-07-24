import express from "express";
import app from "../firebase/app.js";
import { getFirestore } from "firebase-admin/firestore";

const usuariosRouter = express.Router();
const db = getFirestore(app);

usuariosRouter.get("/usuarios", async (req, res) => {
    try {
        const documents = await db.collection("usuarios").get();
        const usuarios = documents.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

usuariosRouter.get("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection("usuarios").doc(id).get();
        if (doc.exists) {
            const usuario = { ...doc.data(), id: doc.id };
            return res.status(200).json(usuario);
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

usuariosRouter.post("/usuarios", async (req, res) => {
    try {
        const usuario = req.body;
        await db.collection("usuarios").add(usuario);
        return res.status(201).json({ msg: "Usuário cadastrado." });
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

usuariosRouter.put("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = req.body;

        const docRef = db.collection("usuarios").doc(id);
        const doc = await docRef.get();
        
        if (doc.exists) {
            await docRef.update(usuario);
            return res.status(200).json({ msg: "Usuário atualizado." });
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

usuariosRouter.delete("/usuarios/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = db.collection("usuarios").doc(id);
        const doc = await docRef.get();

        if (doc.exists) {
            await docRef.delete();
            return res.status(200).json({ msg: "Usuário excluido." });
        } else {
            return res.status(404).json({ msg: "Usuário não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ msg: "Houve um erro. Tente mais tarde." });
    }
});

export default usuariosRouter;