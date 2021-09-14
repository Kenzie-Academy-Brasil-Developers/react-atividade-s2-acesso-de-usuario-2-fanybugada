import { Link, useParams } from "react-router-dom";
import "../index.css";

function Company({ members }) {
  const { id } = useParams();
  const member = members.find((item) => item.id === id);

  return (
    <div className="containerPages">
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Company;
