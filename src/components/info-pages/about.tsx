import { Container, Typography, Box, Button } from "@mui/material";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./info.css";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      {/* INTRODUÇÃO */}
      <Box className="intro-section">
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom className="intro-title">
            <strong>Sobre o Projeto</strong>
          </Typography>
          <Typography variant="body1" align="justify" className="intro-text">
            O projeto <strong>Vitória Régia</strong> tem como objetivo desenvolver um dispositivo flutuante que recolhe parâmetros relevantes da água — como pH, temperatura, turbidez e outros indicadores ambientais.
            Esses dados são transmitidos em tempo real para uma aplicação web desenvolvida em React, permitindo a monitorização da qualidade da água no Lago do Catalão.
            <br /><br />
            Este projeto surge como trabalho final da licenciatura em Engenharia Informática do ISEP, e representa a integração de conhecimentos nas áreas de IoT, redes sem fios (LoRa), sistemas embarcados, back-end em Node.js e visualização de dados.
          </Typography>
        </Container>
      </Box>

      {/* CARROSSEL DE IMAGENS */}
      <Box className="carousel-section">
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom className="carousel-title">
            <strong>Galeria do Projeto</strong>
          </Typography>
          <Slider {...sliderSettings}>
            <div className="slide-item">
              <img src="src/assets/esp32.jpg" alt="Dispositivo flutuante" className="slide-image" />
            </div>
            <div className="slide-item">
              <img src="src/assets/dashboard.png" alt="Dashboard" className="slide-image" />
            </div>
            <div className="slide-item">
              <img src="src/assets/catalao.jpg" alt="Lago do Catalão" className="slide-image" />
            </div>
          </Slider>
        </Container>
      </Box>

      {/* CALL TO ACTION */}
      <Box className="cta-section">
        <Container maxWidth="md" className="cta-container">
          <Typography variant="h4" gutterBottom className="cta-title">
            <strong>Pronto para explorar os dados?</strong>
          </Typography>
          <Link to="/dashboard" className="cta-link">
            <Button variant="contained" color="primary" size="large" className="cta-button">
              Aceder ao Dashboard
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default About;
