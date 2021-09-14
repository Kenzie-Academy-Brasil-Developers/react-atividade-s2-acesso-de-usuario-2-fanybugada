import { Link } from "react-router-dom";
import { members } from "../Members";
import "./index.css";

function Home() {
  return (
    <div className="homeContainer">
      <h1>Bem vind@!</h1>
      {members.map((member, index) =>
        member.type === "pj" ? (
          <p key={index}>
            <Link to={`/company/${member.id}`}> {member.name} </Link>
          </p>
        ) : (
          <p key={index}>
            <Link to={`/customer/${member.id}`}> {member.name} </Link>
          </p>
        )
      )}
    </div>
  );
}

export default Home;
