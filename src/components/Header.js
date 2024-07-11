import { Link } from "react-router-dom";
import bgImg from "../images/avatar-icon.png";
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
          <Link to="login" className="login-link">
            <img src={bgImg} className="login-icon" alt="" />
          </Link>
        </nav>
      </header>
    </div>
  );
}
export default Header;
