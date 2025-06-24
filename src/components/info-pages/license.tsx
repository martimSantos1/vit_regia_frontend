import { Typography, Box, Paper, Button } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import './info.css';

export default function License() {
  return (
    <div className="license-section">
      <Typography variant="h4" gutterBottom>
        Licença de Utilização
      </Typography>

      <Box className="license-container" component={Paper} elevation={2}>
        <Typography variant="body1" paragraph>
          Este projeto está licenciado sob a <strong>Licença Pública Geral GNU, versão 3</strong> (GPL-3.0).
        </Typography>

        <Typography variant="body1" paragraph>
          A GPL-3.0 garante aos utilizadores a liberdade de utilizar, estudar, modificar e redistribuir o software, desde que qualquer versão modificada seja igualmente disponibilizada sob os mesmos termos da licença original, incluindo a preservação dos avisos de copyright e da própria licença.
        </Typography>

        <Typography variant="body1" paragraph>
          Esta licença promove a partilha de conhecimento e a colaboração aberta, assegurando que o software permanece livre e acessível a toda a comunidade. A distribuição de versões modificadas ou derivadas implica o cumprimento integral dos requisitos da GPL-3.0.
        </Typography>

        <Typography variant="body1">
          Para mais detalhes, consulte o texto completo da licença <span></span>
          <a href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html" target="_blank" rel="noopener noreferrer">
            aqui
          </a>
        </Typography>

        <Box className="license-download">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<DescriptionIcon />}
            href="/gpl-3.0.pdf"
            download
            sx={{ mt: 2 }}
          >
            Descarregar Licença em PDF
          </Button>
        </Box>
      </Box>
    </div>
  );
}
