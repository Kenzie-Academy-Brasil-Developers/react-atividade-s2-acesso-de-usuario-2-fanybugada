import { Link, useParams } from "react-router-dom";

function Company({ members }) {
  const { id } = useParams();
  const member = members.find((item) => item.id === id);

  return (
    <div>
      <h1>Detalhes da Empresa</h1>

      <p>Nome da empresa: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
}
export default Company;
