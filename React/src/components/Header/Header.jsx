import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Controle de Estoque</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Produtos</Nav.Link>
                        <Nav.Link as={Link} to="/users">Usuários</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}