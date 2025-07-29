import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Products.css";

export default function Products() {
    return (
        <>
            <Header />
            <Container className='py-5'>
                <h1>Lista de Produtos</h1>
            </Container>
            <Footer />
        </>
    );
}