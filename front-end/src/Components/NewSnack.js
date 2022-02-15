import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewSnack() {
  const API = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const navigate = useNavigate();

  const [newSnack, setNewSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
  });

  const addNewSnack = (newSnack) => {
    axios
      .put(`${API}/snacks/${id}`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (event) => {
    setNewSnack({ ...newSnack, [event.target.id]: event.target.value });
  };

  const handleCheckBox = () => {
    setNewSnack({ ...newSnack, is_favorite: !newSnack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewSnack(newSnack, id);
  };

  return (
    <div>
      <header>Edit Snack</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={newSnack.name}
          onChange={handleText}
          placeholder="snack"
          required
        />
        <br />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          value={newSnack.image}
          onChange={handleText}
          placeholder="upload image"
        />
        <br />
        <label htmlFor="fiber">Fiber</label>
        <input
          type="number"
          id="fiber"
          value={newSnack.fiber}
          onChange={handleText}
          placeholder="fiber"
        />
        <br />
        <label htmlFor="protein">Protein</label>
        <input
          type="number"
          id="protein"
          value={newSnack.protein}
          onChange={handleText}
          placeholder="protein"
        />
        <br />
        <label htmlFor="added_sugar">Added Sugar</label>
        <input
          type="number"
          id="added_sugar"
          value={newSnack.added_sugar}
          onChange={handleText}
          placeholder="added sugar"
        />
        <br />
        <label htmlFor="is_healthy">Is Healthy</label>
        <input
          type="checkbox"
          id="is_healthy"
          value={newSnack.is_healthy}
          onChange={handleCheckBox}
          placeholder="is this your favorite?"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewSnack;
