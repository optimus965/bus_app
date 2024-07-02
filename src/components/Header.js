import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/host">hosts</Link>

          <Link to="/about">About</Link>
          <Link to="/vans">vans</Link>
        </nav>
      </header>
    </div>
  );
}
export default Header;
