import {
  Box,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@mui/material";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import "./home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardDemo from "./dashboards/dashboard-demo";


const Home = () => {
  const { user } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();



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
      <DashboardDemo/>

      {/* CALL TO ACTION */}
      <Box component="section" className="home-cta-split">
        <Box className="cta-text-area">
          <Typography variant="h2" component="h2" gutterBottom>
            Monitorize em tempo real a qualidade da água
          </Typography>
          <Typography paragraph>
            O sistema Vitória Régia recolhe dados ambientais essenciais do Lago do Catalão e oferece acesso a visualizações detalhadas sobre temperatura, pH, turbidez e muito mais.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              if (user) {
                navigate("/dashboard");
              } else {
                setDialogOpen(true);
              }
            }}
          >
            Aceder ao Dashboard
          </Button>

          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Autenticação Necessária</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Para aceder ao dashboard, é necessário iniciar sessão ou criar uma conta.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)}>Fechar</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box className="cta-image-area" component="div">
          <img src="src/assets/catalao.jpg" alt="Vista do Lago do Catalão" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
