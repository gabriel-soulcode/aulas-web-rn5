import { createContext, useContext, useEffect, useState } from "react";
import { firebaseLogin, firebaseLogout, firebaseObserveUser } from "../firebase/auth";

const context = createContext();

function AuthProvider(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    async function login(email, senha) {
        await firebaseLogin(email, senha);
        setIsAuthenticated(true);
    }

    async function logout() {
        await firebaseLogout();
        setIsAuthenticated(false);
    }

    useEffect(() => {
        const unsubscribe = firebaseObserveUser((user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (
        <context.Provider value={{ isAuthenticated, login, logout }}>
            {props.children}
        </context.Provider>
    );
}

function useAuth() {
    return useContext(context);
}

export {
    AuthProvider,
    useAuth
};