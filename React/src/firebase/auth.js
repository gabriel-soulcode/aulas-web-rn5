import {
    createUserWithEmailAndPassword,
    getAuth,
    onIdTokenChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import app from "./app";

const auth = getAuth(app);

async function firebaseSignup(email, senha) {
    await createUserWithEmailAndPassword(auth, email, senha);
}

async function firebaseLogin(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha);
}

async function firebaseLogout() {
    await signOut(auth);
}

function firebaseUser() {
    const user = auth.currentUser;
    return user;
}

async function firebaseUserToken() {
    const user = auth.currentUser;
    const token = await user?.getIdToken();
    return token;
}

function firebaseObserveUser(handleChange) {
    return onIdTokenChanged(auth, (user) => {
        handleChange(user);
    });
}

export {
    firebaseSignup,
    firebaseLogin,
    firebaseLogout,
    firebaseUser,
    firebaseUserToken,
    firebaseObserveUser
};
