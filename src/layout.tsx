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
          <div>
              <div>
                <div>
                  <Footer.Title title="Projeto" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Sobre o projeto</Footer.Link>
                    <Footer.Link href="#">Sobre o Gecad</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Ajuda" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Contacte-nos</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Política de Privacidade</Footer.Link>
                    <Footer.Link href="#">Licença</Footer.Link>
                    <Footer.Link href="#">Termos &amp; Condições</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Download" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">iOS</Footer.Link>
                    <Footer.Link href="#">Android</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
              <div>
                <Footer.Copyright href="#" by="Gecad™" year={2025} />
                <div>
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