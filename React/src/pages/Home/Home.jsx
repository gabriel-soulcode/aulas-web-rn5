import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
    const [contador, setContador] = useState(0);
    const [times, setTimes] = useState([
        "Fluminense",
        "Flamengo",
        "Vasco",
        "Palmeiras",
        "Botafogo"
    ]);

    let resultado = null;

    if (contador >= 0) {
        resultado = "Positivo";
    } else {
        resultado = "Negativo";
    }

    function somar() {
        setContador(contador + 1);
    }

    function subtrair() {
        setContador(contador - 1);
    }

    return (
        <>
            <Header />
            <Container>
                <h2>Contador</h2>

                <Button onClick={(somar)}>+</Button>

                <span className="mx-2">{contador}</span>

                <Button onClick={subtrair}>-</Button>

                <p>
                    { (contador % 2 == 0) ? <i>Par</i> : <b>Impar</b> }
                </p>

                <p>
                    { (contador > 10) && "Maior que 10." }
                </p>

                <p>
                    { resultado }
                </p>

                <ul>
                    { times.map((time, index) => <li key={index}>{time}</li>) }
                </ul>

            </Container>

            <Container className='py-5'>
                <h1>Página Inicial</h1>
                <Link to="/products">Acesse a página de produtos</Link>
            </Container>
            <Footer />
        </>
    );
}