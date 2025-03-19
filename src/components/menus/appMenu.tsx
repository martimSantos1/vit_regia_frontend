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
        </ul>
      </nav>

      {/* Overlay */}
      {isSidePanelOpen && <div className="overlay" onClick={closeSidePanel}></div>}

      <div className={`sidepanel ${isSidePanelOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidePanel}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeSidePanel}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidePanel}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeSidePanel}>Services</Link>
          </li>
          <li>
            <Link to="/login" onClick={closeSidePanel}>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AppMenu;