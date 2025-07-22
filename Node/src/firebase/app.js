
import { cert, initializeApp } from "firebase-admin/app";
import serviceAccount from "../../serviceAccount.json" with { type: "json" };

const app = initializeApp({
    credential: cert(serviceAccount)
});

export default app;