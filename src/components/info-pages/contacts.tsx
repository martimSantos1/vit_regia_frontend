import { Box, Card, CardContent, Typography } from "@mui/material";
import MapComponent from "./mapComponent";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contacts = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Contactos
      </Typography>

      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mt={4}
      >
        {/* LADO ESQUERDO: Telefone e Email */}
        <Box width={{ xs: "100%", md: "50%" }} display="flex" flexDirection="column" gap={2}>
          {/* Telefone */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <PhoneIcon sx={{ mr: 1 }} />
                Telefone
              </Typography>
              <Typography variant="body1"><strong>GECAD:</strong> +351 22 834 0500</Typography>
              <Typography variant="body1"><strong>Prof. Ana Machado:</strong> +55 92 993335648</Typography>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <EmailIcon sx={{ mr: 1 }} />
                Contactos por Email
              </Typography>
              <Typography variant="body2"><strong>Proponente:</strong> proponente@email.com</Typography>
              <Typography variant="body2"><strong>Orientador:</strong> orientador@email.com</Typography>
              <Typography variant="body2"><strong>Co-orientador:</strong> coorientador@email.com</Typography>
              <Typography variant="body2"><strong>Diretor do GECAD:</strong> diretor@email.com</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* LADO DIREITO: Mapa */}
        <Box width={{ xs: "100%", md: "50%" }}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Localização do GECAD
              </Typography>
              <MapComponent />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;