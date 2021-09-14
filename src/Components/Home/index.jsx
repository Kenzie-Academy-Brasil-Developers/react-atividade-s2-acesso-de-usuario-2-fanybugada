import { Link } from "react-router-dom";
import { members } from "../Members";

function Home() {
  return (
    <div>
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
