import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();
    const navigate = useNavigate();

    async function onSubmit({ email, senha }) {
        try {
            await login(email, senha);
            navigate("/");
        } catch (error) {
            console.error(error);
            if (error.code == "auth/invalid-credential") {
                window.alert("Email e/ou senha inválidos.");
            } else {
                window.alert("Houve um erro no login. Tente mais tarde.");
            }
        }
    }

    return (
        <div className="bg-dark">
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card className="p-4">
                    <h3 className="text-center">Login</h3>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" {...register("email")} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" {...register("senha")} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}