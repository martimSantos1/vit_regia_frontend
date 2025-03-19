import { Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";
import "./footer.css"

const AppFooter = () => {
  return (
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
  );
};

export default AppFooter;