import { Outlet, Link } from "react-router";
import { BsGithub } from "react-icons/bs";
import { Footer } from "flowbite-react";
import "./index.css";
import { useState } from "react";

const Layout = () => {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
    if (!isSidePanelOpen) {
      document.documentElement.classList.add("no-scroll"); // Add no-scroll class to <html>
      document.body.classList.add("no-scroll"); // Add no-scroll class to <body>
    } else {
      document.documentElement.classList.remove("no-scroll"); // Remove no-scroll class from <html>
      document.body.classList.remove("no-scroll"); // Remove no-scroll class from <body>
    }
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
    document.documentElement.classList.remove("no-scroll"); // Ensure no-scroll class is removed from <html>
    document.body.classList.remove("no-scroll"); // Ensure no-scroll class is removed from <body>
  };

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

      <div className="content-container">
        <Outlet />
      </div>

      <div className="footer--pin">
        <Footer container>
          <div className="footer-container">
            <div className="footer-main">
              <div>
                <Footer.Title title="Projeto" />
                <Footer.Link href="#">Sobre o projeto</Footer.Link>
                <Footer.Link href="#">Sobre o Gecad</Footer.Link>
              </div>
              <div>
                <Footer.Title title="Ajuda" />
                <Footer.Link href="#">FAQs</Footer.Link>
                <Footer.Link href="#">Contacte-nos</Footer.Link>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.Link href="#">Política de Privacidade</Footer.Link>
                <Footer.Link href="#">Licença</Footer.Link>
                <Footer.Link href="#">Termos &amp; Condições</Footer.Link>
              </div>
              <div>
                <Footer.Title title="Download" />
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
              </div>
            </div>
            <div className="footer-bottom">
              <Footer.Copyright href="#" by="Gecad™" year={2025} />
              <div className="footer-icons">
                <Footer.Icon href="#" icon={BsGithub} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </>
  )
};

export default Layout;