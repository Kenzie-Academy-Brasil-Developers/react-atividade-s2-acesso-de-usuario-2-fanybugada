import { Link, useParams } from "react-router-dom";
import "../index.css";

function Customer({ members }) {
  const { id } = useParams();
  const member = members.find((item) => item.id === id);

  return (
    <div className="containerPages">
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Customer;
