import { useEffect, useState } from "react";
import dataApi from "../../services/api/dataApi";
import { SensorCard } from "./sensorCard";
import { Box, Typography, CircularProgress } from "@mui/material";
import ExplanationSection from "./parametersExplanation";

type SensorData = {
    temperature: number;
    ph: number;
    tds: number;
    conductivity: number;
    oxygen: number;
    timestamp: string;
};

export default function Dashboard() {
    const [data, setData] = useState<SensorData | null>(null);

    const fetchLatestData = async () => {
        try {
            //const response = await dataApi.get("/latest");
            // Usa a resposta real, ou dados de teste se quiseres
            const testData: SensorData = {
                temperature: 25.3,
                ph: 5.8,
                tds: 500,
                conductivity: 500,
                oxygen: 8.5,
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

                {/* Circular progress */}
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

            {/* Primeira linha: Temperatura e pH */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={1}
                justifyContent="center"
                mb={3}
            >
                <SensorCard
                    label="Temperatura"
                    sensorType="temperature"
                    value={data.temperature}
                    maxValue={50}
                    unit="ºC"
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                />
                <SensorCard
                    label="pH"
                    sensorType="ph"
                    value={data.ph}
                    maxValue={14}
                    unit=""
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                />
            </Box>

            {/* Segunda linha: restantes sensores */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                flexWrap="wrap"
                gap={4}
                justifyContent="center"
                mb={2}
            >
                <SensorCard
                    label="TDS"
                    sensorType="tds"
                    value={data.tds}
                    maxValue={1000}
                    unit="ppm"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                />
                <SensorCard
                    label="Condutividade"
                    sensorType="conductivity"
                    value={data.conductivity}
                    maxValue={2000}
                    unit="µS/cm"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                />
                <SensorCard
                    label="Oxigénio Dissolvido"
                    sensorType="oxygen"
                    value={data.oxygen}
                    maxValue={20}
                    unit="mg/L"
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                />
            </Box>

            {/* Data da última atualização */}
            <Typography variant="body2" color="textSecondary" textAlign="right">
                Última atualização: {new Date(data.timestamp).toLocaleString()}
            </Typography>

            <ExplanationSection/>
        </Box>
    );

}

