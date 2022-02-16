import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {
  return (
    <div className="Snack a">
      <HeartHealth />
      <img src={snack.image} width="200" alt={snack.name} />
      <h4>{snack.name}</h4>
      <Link to={`/snacks/${snack.id}`}>🍽</Link>
    </div>
  );
}

export default Snack;
