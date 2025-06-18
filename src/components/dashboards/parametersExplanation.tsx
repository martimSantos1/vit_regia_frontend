import { Box, Typography } from "@mui/material";

export default function ExplanationSection() {
    return (
        <Box mt={6} pt={4} pb={4} pl={30} pr={30}>
            <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold" }}
            >
                Interpretação dos Parâmetros
            </Typography>

            <Typography
                paragraph
                sx={{ textAlign: "justify" }}
            >
                Abaixo encontra-se uma explicação de cada parâmetro medido, bem como os intervalos considerados seguros ou recomendados para diferentes usos da água.
            </Typography>

            <Box mt={3}>
                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                    🌡 Temperatura
                </Typography>
                <Typography paragraph sx={{ textAlign: "justify" }}>
                    A temperatura da água influencia a solubilidade do oxigénio e o metabolismo dos organismos aquáticos.
                    Para atividades recreativas e ecossistemas equilibrados, o ideal é manter entre <strong>20°C e 30°C</strong>.
                    Acima de 35°C pode ser prejudicial para peixes e plantas aquáticas sensíveis.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                    🧪 pH
                </Typography>
                <Typography paragraph sx={{ textAlign: "justify" }}>
                    O pH mede a acidez ou alcalinidade da água. A maioria das formas de vida aquática prefere águas entre <strong>6.5 e 8.5</strong>.
                    Valores fora desse intervalo podem causar stress ou até mortalidade. Para uso recreativo ou irrigação, o intervalo ideal mantém-se entre <strong>6 e 8.5</strong>.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                    💧 TDS (Sólidos Totais Dissolvidos)
                </Typography>
                <Typography paragraph sx={{ textAlign: "justify" }}>
                    Indica a quantidade de sais, minerais e metais dissolvidos na água. Para usos gerais (como irrigação ou recreação),
                    um intervalo entre <strong>0 e 500 ppm</strong> é considerado adequado. Acima de 1000 ppm pode afetar o sabor, equipamentos e organismos vivos.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                    ⚡ Condutividade Elétrica
                </Typography>
                <Typography paragraph sx={{ textAlign: "justify" }}>
                    Relaciona-se com o TDS: quanto mais sais dissolvidos, maior a condutividade. Para águas naturais, valores até <strong>1000 µS/cm</strong> são aceitáveis.
                    Para usos como irrigação e pesca, recomenda-se <strong>entre 100 e 1500 µS/cm</strong>.
                </Typography>

                <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: 2 }}>
                    🫧 Oxigénio Dissolvido
                </Typography>
                <Typography paragraph sx={{ textAlign: "justify" }}>
                    Essencial para a vida aquática. Valores acima de <strong>5 mg/L</strong> são adequados para a maioria dos peixes e organismos.
                    Abaixo de <strong>3 mg/L</strong>, o stress e a mortalidade aumentam. Idealmente, deve manter-se entre <strong>6 e 10 mg/L</strong>.
                </Typography>
            </Box>
        </Box>
    );
}
