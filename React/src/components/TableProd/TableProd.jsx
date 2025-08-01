import "./TableProd.css";

export default function TableProd(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {props.produtos.map(prod => (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.nome}</td>
                        <td>{prod.quantidade}</td>
                        <td>R$ {prod.preco}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}