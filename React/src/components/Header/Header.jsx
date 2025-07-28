import "./Header.css";

export default function Header() {
  const nome = "Gabriel Braga";
  return (
    <header>
      <h1>Bem-vindo(a), { nome }</h1>
    </header>
  );
}