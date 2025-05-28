import "./home.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="overlay-text">
          <h1>Vitória Régia</h1>
        </div>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="home-about">
        <h2>O que é a Vitória Régia?</h2>
        <p>
          Vitória Régia é um projeto que visa responder as necessidades de sustentabilidade ambiental da comunidade do Catalão.
          Focado em responder ao problema da qualidade da água, imposto a todos os habitantes, este projeto combina a utilização de sensores e tecnologias IoT para recolher e exibir dados qualitativos em tempo real.
        </p>
        <br />
        <Button variant="contained" color="primary" size="large" component={Link} to="/about">
          Saber mais
        </Button>
      </section>

      {/* DADOS EM TEMPO REAL */}
      <section className="home-data">
        <h2>Recolhimento de dados</h2>
        <div className="data-grid">
          <div className="data-card">
            <p className="data-label">Temperatura</p>
            <p className="data-value">26.3 ºC</p>
          </div>
          <div className="data-card">
            <p className="data-label">pH</p>
            <p className="data-value">7.2</p>
          </div>
          <div className="data-card">
            <p className="data-label">Turbidez</p>
            <p className="data-value">4.1 NTU</p>
          </div>
        </div>
        <p className="data-note">* Dados simulados. Conecte o dispositivo para visualizar dados reais.</p>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-cta-split">
        <div className="cta-text-area">
          <h2>Monitorize em tempo real a qualidade da água</h2>
          <p>
            O sistema Vitória Régia recolhe dados ambientais essenciais do Lago do Catalão e oferece acesso a visualizações detalhadas sobre temperatura, pH, turbidez e muito mais.
          </p>
          <Link to="/dashboard">
            <Button variant="contained" color="primary" size="large">
              Aceder ao Dashboard
            </Button>
          </Link>
        </div>
        <div className="cta-image-area">
          <img src="src/assets/catalao.jpg" alt="Vista do Lago do Catalão" />
        </div>
      </section>


    </div>
  );
};

export default Home;
