import { Link, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <Link to="">DashBoard</Link>
        <Link to="income">income</Link>
        <Link to="vans">Vans</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default HostLayout;
