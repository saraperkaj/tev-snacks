import Snack from "../Components/Snack";
import axios from "axios";
import { useState, useEffect } from "react";

function Snacks() {
  const API = process.env.REACT_APP_API_KEY;
  console.log(`Hi, ${API}`);

  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((err) => console.log(err));
  }, [API]);

  return (
    <section className="Snacks">
      <div className="Snack">
        <article className="Snacks">
          <h1>Snacks</h1>
          {snacks.map((snack, id) => {
            return <Snack key={id} snack={snack} />;
          })}
        </article>
      </div>
    </section>
  );
}

export default Snacks;
