import "./appMenu.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

interface MenuProps {
  toggleSidePanel: () => void;
  closeSidePanel: () => void;
  isSidePanelOpen: boolean;
}

const AppMenu = ({ toggleSidePanel, closeSidePanel, isSidePanelOpen }: MenuProps) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // remove `loading`

  return (
    <>
      <nav>
        <button className="menu-toggle" onClick={toggleSidePanel}>
          ☰
        </button>

        <ul className="nav-left">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>

        <ul className="nav-right">
          {user ? (
            <>
              <li>
                <Link to="/profile">{user.name}</Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/register">Registar</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* Overlay e Sidepanel permanecem sempre visíveis e com condicional do user */}
      {isSidePanelOpen && <div className="overlay" onClick={closeSidePanel}></div>}

      <div className={`sidepanel ${isSidePanelOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidePanel}>
          &times;
        </button>
        <ul className="sidepanel-top-container">
          <li>
            <Link to="/" onClick={closeSidePanel}>Início</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidePanel}>Sobre</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard" onClick={closeSidePanel}>Dashboard</Link>
            </li>
          )}
        </ul>

        <ul className="sidepanel-bottom-container">
          {user ? (
            <>
              <li>
                <Link to="/profile" onClick={closeSidePanel}>{user.name}</Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                    closeSidePanel();
                    navigate("/");
                  }}
                  className="logout-button"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" onClick={closeSidePanel}>Entrar</Link>
              </li>
              <li>
                <Link to="/register" onClick={closeSidePanel}>Registar</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};


export default AppMenu;