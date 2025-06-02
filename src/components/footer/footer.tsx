import { Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css"

const AppFooter = () => {
  return (
    <div className="footer--pin">
      <Footer container>
        <div className="footer-container">
          <div className="footer-main">
            <div>
              <Footer.Title title="Projeto" />
              <Link to="/about">Sobre o projeto</Link>
              <Footer.Link
                href="https://www.gecad.isep.ipp.pt/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sobre o Gecad
              </Footer.Link>
            </div>
            <div>
              <Footer.Title title="Ajuda" />
              <Footer.Link href="#">FAQs</Footer.Link>
              <Link to="/contacts">Contacte-nos</Link>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.Link href="#">Política de Privacidade</Footer.Link>
              <Footer.Link href="#">Licença</Footer.Link>
              <Footer.Link href="#">Termos &amp; Condições</Footer.Link>
            </div>
            {/*<div>
              <Footer.Title title="Download" />
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
            </div>*/}
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
  );
};

export default AppFooter;