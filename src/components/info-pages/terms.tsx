import { Container, Typography, Paper } from "@mui/material";

export default function TermsAndConditions() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Termos e Condições
                </Typography>
                <Typography variant="body1" paragraph>
                    Ao utilizar esta aplicação, o utilizador concorda com os presentes Termos e Condições. Estes regulam o acesso e uso da plataforma Vitória Régia e têm como objetivo assegurar uma utilização segura, ética e conforme à legislação em vigor.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    1. Objetivo da Plataforma
                </Typography>
                <Typography variant="body1" paragraph>
                    A plataforma Vitória Régia tem como finalidade disponibilizar dados em tempo real sobre a qualidade da água da comunidade do Catalão, no Amazonas. O acesso ao dashboard e às funcionalidades completas exige autenticação via conta de utilizador.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    2. Conta do Utilizador
                </Typography>
                <Typography variant="body1" paragraph>
                    O utilizador é responsável por manter a confidencialidade das credenciais da sua conta. Assegura-se que os dados fornecidos (nome de utilizador, email e password) são verídicos e atualizados. Qualquer atividade realizada através da conta é da exclusiva responsabilidade do utilizador.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    3. Recolha e Utilização de Dados
                </Typography>
                <Typography variant="body1" paragraph>
                    São recolhidos apenas os dados essenciais para funcionamento da aplicação: nome de utilizador, email e password. Estes dados são armazenados de forma segura e não são partilhados nem vendidos a terceiros, salvo obrigação legal.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    4. Direitos de Propriedade Intelectual
                </Typography>
                <Typography variant="body1" paragraph>
                    Todo o conteúdo da aplicação, incluindo textos, imagens, gráficos e software, é protegido por direitos de autor e está licenciado sob a Licença Pública Geral GNU v3.0. O utilizador pode utilizar, modificar e distribuir o código, desde que respeite os termos dessa licença.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    5. Limitações de Responsabilidade
                </Typography>
                <Typography variant="body1" paragraph>
                    A equipa do projeto Vitória Régia não se responsabiliza por quaisquer danos diretos, indiretos ou consequentes decorrentes do uso da aplicação ou da interpretação dos dados fornecidos. A informação disponibilizada serve apenas para fins educativos e de monitorização ambiental.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    6. Alterações aos Termos
                </Typography>
                <Typography variant="body1" paragraph>
                    Reservamo-nos o direito de atualizar ou modificar estes Termos e Condições a qualquer momento. Recomenda-se a sua consulta periódica. A continuação da utilização da aplicação após alterações implica a aceitação dos novos termos.
                </Typography>

                <Typography variant="h5" gutterBottom>
                    7. Contacto
                </Typography>
                <Typography variant="body1" paragraph>
                    Para esclarecimentos adicionais, os utilizadores podem contactar a equipa do projeto através do email fornecido na aplicação.
                </Typography>
            </Paper>
        </Container>
    );
}