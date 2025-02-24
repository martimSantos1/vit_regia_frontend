import { Outlet, Link } from "react-router";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <ul className="nav-right">
          <li className="login-button">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>


      <div className="content">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;