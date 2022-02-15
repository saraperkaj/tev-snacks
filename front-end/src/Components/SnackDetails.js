import HeartHealth from "./HeartHealth";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SnackDetails() {
  const API = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((err) => console.warn(err));
  }, [API, id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <aside>
        <HeartHealth />
      </aside>
      {snack.name}
      <div>
        <img src={snack.image} alt={snack.name} />
      </div>
      <div>
        Protein: {snack.protein}
        Fiber: {snack.fiber}
        Added Sugar: {snack.added_sugar}
      </div>

      <Link to={`/snacks/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      <Link to="/snacks">
        <button>Back</button>
      </Link>
    </article>
  );
}

export default SnackDetails;
