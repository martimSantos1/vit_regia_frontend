import { Outlet, Link } from "react-router";
import { BsGithub } from "react-icons/bs";
import { Footer } from "flowbite-react";
import "./index.css";

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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Outlet />
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