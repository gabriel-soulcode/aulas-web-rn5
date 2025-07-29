import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Users.css";

export default function Users() {
    return (
        <>
            <Header />
            <Container className="py-5">
                <h1>Lista de Usuários</h1>
            </Container>
            <Footer />
        </>
    );
}