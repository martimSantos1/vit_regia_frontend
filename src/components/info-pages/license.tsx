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
        <Typography variant="body1">
          Este projeto está licenciado sob a <strong>Licença Pública Geral GNU v3.0</strong> (GPL-3.0).
        </Typography>

        <Typography variant="body1">
          A Licença Pública Geral GNU garante que qualquer utilizador tem o direito de utilizar, estudar, modificar e distribuir este software, desde que mantenha os mesmos direitos nas versões modificadas e preserve os avisos de copyright e a própria licença.
        </Typography>

        <Typography variant="body1" paragraph>
          Em resumo, esta licença promove a liberdade dos utilizadores e a partilha do conhecimento, incentivando a colaboração aberta e transparente. No entanto, qualquer distribuição deste software ou das suas derivações deve também estar sujeita aos mesmos termos da GPL-3.0.
        </Typography>

        <Typography variant="body1">
          Para mais detalhes, consulte o texto completo da licença <span></span>
          <a href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html" target="_blank" rel="noopener noreferrer">
             aqui
          </a>
        </Typography>

        <Box className="license-download">
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<DescriptionIcon />} 
            href="/LICENSE.txt" 
            download
          >
            Descarregar Licença
          </Button>
        </Box>
      </Box>
    </div>
  );
}
