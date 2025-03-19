import { Link } from "react-router-dom";
import "./appMenu.css"

interface MenuProps {
  toggleSidePanel: () => void;
  closeSidePanel: () => void;
  isSidePanelOpen: boolean;
}

const AppMenu = ({ toggleSidePanel, closeSidePanel, isSidePanelOpen }: MenuProps) => {
  return (
    <>
      <nav>
        <button className="menu-toggle" onClick={toggleSidePanel}>
          ☰
        </button>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Resgistar</Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isSidePanelOpen && <div className="overlay" onClick={closeSidePanel}></div>}

      <div className={`sidepanel ${isSidePanelOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidePanel}>
          &times;
        </button>
        <ul className="sidepanel-top-container">
          <li>
            <Link to="/" onClick={closeSidePanel}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidePanel}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeSidePanel}>Services</Link>
          </li>
        </ul>

        <ul className="sidepanel-bottom-container">
          <li>
            <Link to="/login" onClick={closeSidePanel}>Entrar</Link>
          </li>
          <li>
            <Link to="/register" onClick={closeSidePanel}>Registar</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AppMenu;