import { Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";

const AppFooter = () => {
  return (
    <Footer container className="footer--pin">
      <Footer className="footer-container">
        <Footer className="footer-main">
          <Footer.LinkGroup col className="footer-section">
            <Footer.Title title="Projeto" />
            <Link to="/about">Sobre o projeto</Link>
            <Footer.Link
              href="https://www.gecad.isep.ipp.pt/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre o Gecad
            </Footer.Link>
          </Footer.LinkGroup>

          <Footer.LinkGroup col className="footer-section">
            <Footer.Title title="Ajuda" />
            <Link to="/faqs">FAQS</Link>
            <br />
            <Link to="/contacts">Contacte-nos</Link>
          </Footer.LinkGroup>

          <Footer.LinkGroup col className="footer-section">
            <Footer.Title title="Legal" />
            <Footer.Link href="#">Política de Privacidade</Footer.Link>
            <Link to="/license">Licença</Link>
            <Footer.Link href="#">Termos &amp; Condições</Footer.Link>
          </Footer.LinkGroup>
        </Footer>

        <Footer className="footer-bottom">
          <Footer.Copyright href="#" by="Gecad™" year={2025} />
          <Footer.LinkGroup className="footer-icons">
            <Footer.Icon href="#" icon={BsGithub} />
          </Footer.LinkGroup>
        </Footer>
      </Footer>
    </Footer>
  );
};

export default AppFooter;
