import { useEffect, useState } from "react";
//import dataApi from "../../services/api/dataApi";
import { SensorCard } from "./sensorCard";
import { Box, Typography, CircularProgress } from "@mui/material";
import { SensorDialog } from "./sensorDialog"; // ✅ importa o dialog

type SensorData = {
    temperature: number;
    ph: number;
    tds: number;
    conductivity: number;
    oxygen: number;
    turbidity: number;
    timestamp: string;
};


// ✅ Mapeamento de textos explicativos por parâmetro
const explanations: Record<string, string> = {
    "Temperatura": "A temperatura da água influencia a solubilidade do oxigénio e a atividade biológica.",
    "pH": "O pH ideal da água potável varia entre 6,5 e 8,5. Valores fora deste intervalo podem indicar contaminação ou desequilíbrio químico.",
    "TDS": "TDS (Total de Sólidos Dissolvidos) indica a quantidade de substâncias dissolvidas na água, geralmente medida em ppm.",
    "Condutividade": "A condutividade elétrica da água reflete a presença de sais dissolvidos e outros minerais.",
    "Oxigénio Dissolvido": "O oxigénio dissolvido é essencial para a vida aquática. Valores baixos podem indicar poluição.",
    "Turbidez": "A turbidez mede a clareza da água. Valores altos podem indicar a presença de partículas suspensas, como sedimentos ou poluentes.",
};

export default function Dashboard() {
    const [data, setData] = useState<SensorData | null>(null);

    // ✅ estado do diálogo
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSensor, setSelectedSensor] = useState<{ label: string; explanation: string } | null>(null);

    const handleOpen = (label: string) => {
        setSelectedSensor({ label, explanation: explanations[label] || "Sem explicação disponível." });
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setSelectedSensor(null);
    };

    const fetchLatestData = async () => {
        try {
            const testData: SensorData = {
                temperature: 25.3,
                ph: 5.8,
                tds: 500,
                conductivity: 500,
                oxygen: 8.5,
                turbidity: 42,
                timestamp: new Date().toISOString(),
            };

            setData(testData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchLatestData();
        const intervalId = setInterval(fetchLatestData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    if (!data) {
        return (
            <Box pt={4} pb={4} pl={30} pr={30}>
                <Typography variant="h4" gutterBottom>
                    Dados em Tempo Real
                </Typography>
                <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
                    <CircularProgress size={100} />
                </Box>
                <Typography textAlign="center">Carregando dados...</Typography>
            </Box>
        );
    }

    return (
        <Box pt={4} pb={4} pl={{ xs: 2, sm: 10, md: 30 }} pr={{ xs: 2, sm: 10, md: 30 }}>
            <Typography variant="h4" gutterBottom>
                Dados em Tempo Real
            </Typography>

            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1} justifyContent="center" mb={3}>
                <SensorCard
                    label="Temperatura"
                    sensorType="temperature"
                    value={data.temperature}
                    maxValue={50}
                    unit="ºC"
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("Temperatura")} // ✅
                />
                <SensorCard
                    label="pH"
                    sensorType="ph"
                    value={data.ph}
                    maxValue={14}
                    unit=""
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("pH")} // ✅
                />
            </Box>

            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={4} justifyContent="center" mb={2}>
                <SensorCard
                    label="TDS"
                    sensorType="tds"
                    value={data.tds}
                    maxValue={1000}
                    unit="ppm"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("TDS")} // ✅
                />
                <SensorCard
                    label="Condutividade"
                    sensorType="conductivity"
                    value={data.conductivity}
                    maxValue={2000}
                    unit="µS/cm"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Condutividade")} // ✅
                />
                <SensorCard
                    label="Oxigénio Dissolvido"
                    sensorType="oxygen"
                    value={data.oxygen}
                    maxValue={20}
                    unit="mg/L"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Oxigénio Dissolvido")} // ✅
                />
                <SensorCard
                    label="Turbidez"
                    sensorType="turbidity"
                    value={data.turbidity}
                    maxValue={100}
                    unit="NTU"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Turbidez")} // ✅
                />

            </Box>

            <Typography variant="body2" color="textSecondary" textAlign="right">
                Última atualização: {new Date(data.timestamp).toLocaleString()}
            </Typography>

            {/* ✅ Diálogo explicativo */}
            {selectedSensor && (
                <SensorDialog
                    open={openDialog}
                    onClose={handleClose}
                    sensorLabel={selectedSensor.label}
                    explanation={selectedSensor.explanation}
                />
            )}
        </Box>
    );
}
