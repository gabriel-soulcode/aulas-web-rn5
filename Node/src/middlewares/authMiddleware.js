import { getAuth } from "firebase-admin/auth";
import app from "../firebase/app.js";

export default async function authMiddleware(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "Token ausente." });
    }

    try {
        const auth = getAuth(app);
        const user = await auth.verifyIdToken(token);
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({ msg: "Token inválido." });
    }
}