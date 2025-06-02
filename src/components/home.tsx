import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <Box className="home-container">
      {/* HERO SECTION */}
      <Box component="section" className="home-hero">
        <Box className="overlay-text">
          <Typography variant="h1" component="h1">
            Vitória Régia
          </Typography>
        </Box>
      </Box>

      {/* SOBRE O PROJETO */}
      <Container component="section" className="home-about" maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          O que é a Vitória Régia?
        </Typography>
        <Typography className="home-about-text" variant="body1">
          Vitória Régia é um projeto que visa responder as necessidades de sustentabilidade ambiental da comunidade do Catalão.
          Focado em responder ao problema da qualidade da água, imposto a todos os habitantes, este projeto combina a utilização de sensores e tecnologias IoT para recolher e exibir dados qualitativos em tempo real.
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/about">
          Saber mais
        </Button>
      </Container>

      {/* DADOS EM TEMPO REAL */}
      <Container component="section" className="home-data" maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          Recolhimento de dados
        </Typography>
        <Box className="data-grid">
          <Box className="data-card">
            <Typography className="data-label" variant="subtitle1">
              Temperatura
            </Typography>
            <Typography className="data-value" variant="h6">
              26.3 ºC
            </Typography>
          </Box>
          <Box className="data-card">
            <Typography className="data-label" variant="subtitle1">
              pH
            </Typography>
            <Typography className="data-value" variant="h6">
              7.2
            </Typography>
          </Box>
          <Box className="data-card">
            <Typography className="data-label" variant="subtitle1">
              Turbidez
            </Typography>
            <Typography className="data-value" variant="h6">
              4.1 NTU
            </Typography>
          </Box>
        </Box>
        <Typography className="data-note" variant="caption" display="block" mt={2}>
          <strong>* Para ter acesso a todos dados recolhidos em tempo real, inicie sessão ou crie uma nova conta.</strong>
        </Typography>
      </Container>

      {/* CALL TO ACTION */}
      <Box component="section" className="home-cta-split">
        <Box className="cta-text-area">
          <Typography variant="h2" component="h2" gutterBottom>
            Monitorize em tempo real a qualidade da água
          </Typography>
          <Typography paragraph>
            O sistema Vitória Régia recolhe dados ambientais essenciais do Lago do Catalão e oferece acesso a visualizações detalhadas sobre temperatura, pH, turbidez e muito mais.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/dashboard">
            Aceder ao Dashboard
          </Button>
        </Box>
        <Box className="cta-image-area" component="div">
          <img src="src/assets/catalao.jpg" alt="Vista do Lago do Catalão" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
