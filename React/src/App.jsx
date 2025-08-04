import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login/Login';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;