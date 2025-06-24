import { Box, Container, Typography } from "@mui/material";

const DashboardDemo = () => {
    return (
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
    );
}

export default DashboardDemo;