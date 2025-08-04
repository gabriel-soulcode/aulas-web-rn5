import { createContext, useContext, useState } from "react";

const context = createContext();

function AuthProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login() {
        console.log("Logado")
        setIsAuthenticated(true);
    }

    function logout() {
        console.log("Deslogado");
        setIsAuthenticated(false);
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