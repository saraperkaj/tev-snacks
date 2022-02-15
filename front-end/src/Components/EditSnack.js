import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditSnack() {
  const API = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const navigate = useNavigate();

  const [editSnack, setEditSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
  });

  const editedSnack = (editSnack) => {
    axios
      .put(`${API}/snacks/${id}`, editSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (event) => {
    setEditSnack({ ...editSnack, [event.target.id]: event.target.value });
  };

  const handleCheckBox = () => {
    setEditSnack({ ...editSnack, is_favorite: !editSnack.is_healthy });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editedSnack(editSnack, id);
  };

  return (
    <div>
      <header>Edit Snack</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={editSnack.name}
          onChange={handleText}
          placeholder="snack"
          required
        />
        <br />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          value={editSnack.image}
          onChange={handleText}
          placeholder="upload image"
        />
        <br />
        <label htmlFor="fiber">Fiber</label>
        <input
          type="number"
          id="fiber"
          value={editSnack.fiber}
          onChange={handleText}
          placeholder="fiber"
        />
        <br />
        <label htmlFor="protein">Protein</label>
        <input
          type="number"
          id="protein"
          value={editSnack.protein}
          onChange={handleText}
          placeholder="protein"
        />
        <br />
        <label htmlFor="added_sugar">Added Sugar</label>
        <input
          type="number"
          id="added_sugar"
          value={editSnack.added_sugar}
          onChange={handleText}
          placeholder="added sugar"
        />
        <br />
        <label htmlFor="is_healthy">Is Healthy</label>
        <input
          type="checkbox"
          id="is_healthy"
          value={editSnack.is_healthy}
          onChange={handleCheckBox}
          placeholder="is this your favorite?"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default EditSnack;
