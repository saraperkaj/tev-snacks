import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/snacks">
        <header>Snacks</header>
      </Link>
      <a href="/snacks/new">New Snack</a>
    </nav>
  );
}

export default NavBar;
