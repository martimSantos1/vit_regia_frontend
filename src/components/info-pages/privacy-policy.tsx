import { Container, Typography, Paper, Box } from "@mui/material";

export default function PrivacyPolicy() {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Política de Privacidade
                </Typography>

                <Typography variant="body1" paragraph>
                    A sua privacidade é importante para nós. Esta política explica como recolhemos, utilizamos e protegemos os seus dados pessoais no âmbito da aplicação <strong>Vitória Régia</strong>, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).
                </Typography>

                <Typography variant="h5" gutterBottom>
                    1. Dados Recolhidos
                </Typography>
                <Typography variant="body1" paragraph>
                    A aplicação apenas recolhe os seguintes dados pessoais no momento do registo:
                </Typography>
                <Box component="ul" sx={{ listStyleType: "disc", pl: 3 }}>
                    <li><Typography variant="body1">Nome de utilizador (username)</Typography></li>
                    <li><Typography variant="body1">Endereço de e-mail</Typography></li>
                    <li><Typography variant="body1">Palavra-passe (armazenada de forma encriptada)</Typography></li>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                    2. Finalidade da Recolha de Dados
                </Typography>
                <Typography variant="body1" paragraph>
                    Estes dados são recolhidos exclusivamente para efeitos de autenticação e gestão da conta de utilizador, não sendo utilizados para fins comerciais ou promocionais.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    3. Partilha de Dados com Terceiros
                </Typography>
                <Typography variant="body1" paragraph>
                    Os seus dados <strong>não</strong> são partilhados, vendidos ou cedidos a terceiros. Todas as informações permanecem confidenciais e são utilizadas apenas no âmbito interno da aplicação.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    4. Segurança dos Dados
                </Typography>
                <Typography variant="body1" paragraph>
                    Adotamos medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. As palavras-passe são armazenadas utilizando algoritmos de encriptação robustos.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    5. Direitos do Utilizador
                </Typography>
                <Typography variant="body1" paragraph>
                    Nos termos do RGPD, o utilizador tem o direito de:
                </Typography>
                <Box component="ul" sx={{ listStyleType: "disc", pl: 3 }}>
                    <li><Typography variant="body1">Aceder aos seus dados pessoais;</Typography></li>
                    <li><Typography variant="body1">Solicitar a retificação ou eliminação dos dados;</Typography></li>
                    <li><Typography variant="body1">Retirar o consentimento, a qualquer momento, sem comprometer a licitude do tratamento realizado com base no consentimento anteriormente dado;</Typography></li>
                    <li><Typography variant="body1">Solicitar a portabilidade dos dados;</Typography></li>
                    <li><Typography variant="body1">Apresentar reclamação a uma autoridade de controlo.</Typography></li>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                    6. Contacto
                </Typography>
                <Typography variant="body1" paragraph>
                    Para qualquer questão relacionada com esta política ou com os seus dados pessoais, poderá contactar-nos através do endereço de e-mail disponibilizado na aplicação.
                </Typography>

                <Typography variant="body2" color="text.secondary" align="right" sx={{ mt: 4 }}>
                    Última atualização: Junho de 2025
                </Typography>
            </Paper>
        </Container>
    );
}