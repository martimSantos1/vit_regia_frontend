import { useEffect, useState } from "react";
import { getData, getDataByRange } from "../../services/data-services";
import { SensorCard } from "./cards/sensorCard";
import { Box, Typography } from "@mui/material";
import { SensorDialog } from "./cards/sensorDialog";
import { SensorChart } from "./charts/sensorChart";
import { ParameterSelect } from "./charts/parameterSelect";
import { SensorData, SensorType, PeriodOption, explanations } from "./dashboard-types";

export default function Dashboard() {
    const [data, setData] = useState<SensorData | null>(null);
    const [chartData, setChartData] = useState<SensorData[]>([]);
    const [selectedParameter, setSelectedParameter] = useState<SensorType>("all");
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodOption>("1h");

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSensor, setSelectedSensor] = useState<{ label: string; explanation: string } | null>(null);

    const [isLoadingLiveData, setIsLoadingLiveData] = useState(true);

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
            setIsLoadingLiveData(true);
            const response = await getData(1);
            setData(response.data[0]);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        } finally {
            setIsLoadingLiveData(false);
        }
    };

    const fetchChartData = async () => {
        try {
            const response = await getDataByRange(selectedPeriod);
            setChartData(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados históricos:", error);
        }
    };

    useEffect(() => {
        fetchLatestData();
        const intervalId = setInterval(fetchLatestData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        fetchChartData();
    }, [selectedPeriod]);

    return (
        <Box pt={4} pb={4} pl={{ xs: 2, sm: 10, md: 30 }} pr={{ xs: 2, sm: 10, md: 30 }}>
            <Typography variant="h4" gutterBottom>
                Dados em Tempo Real
            </Typography>

            {/* Cards grandes */}
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1} justifyContent="center" mb={3}>
                <SensorCard
                    label="Temperatura"
                    sensorType="temperature"
                    value={data?.temperature}
                    maxValue={50}
                    unit="ºC"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("Temperatura")}
                />
                <SensorCard
                    label="pH"
                    sensorType="ph"
                    value={data?.ph}
                    maxValue={14}
                    unit=""
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("pH")}
                />
            </Box>

            {/* Cards pequenos */}
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={4} justifyContent="center" mb={2}>
                <SensorCard
                    label="TDS"
                    sensorType="tds"
                    value={data?.tds}
                    maxValue={1000}
                    unit="ppm"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("TDS")}
                />
                <SensorCard
                    label="Condutividade"
                    sensorType="conductivity"
                    value={data?.conductivity}
                    maxValue={2000}
                    unit="µS/cm"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Condutividade")}
                />
                <SensorCard
                    label="Oxigénio Dissolvido"
                    sensorType="dissolvedOxygen"
                    value={data?.dissolvedOxygen}
                    maxValue={20}
                    unit="mg/L"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Oxigénio Dissolvido")}
                />
                <SensorCard
                    label="Turbidez"
                    sensorType="turbidity"
                    value={data?.turbidity}
                    maxValue={100}
                    unit="NTU"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "33%", md: "25%" }}
                    onClick={() => handleOpen("Turbidez")}
                />
            </Box>

            {data && (
                <Typography variant="body2" color="textSecondary" textAlign="right">
                    Última atualização: {new Date(data.timestamp).toLocaleString()}
                </Typography>
            )}

            {selectedSensor && (
                <SensorDialog
                    open={openDialog}
                    onClose={handleClose}
                    sensorLabel={selectedSensor.label}
                    explanation={selectedSensor.explanation}
                />
            )}

            <ParameterSelect
                selectedParameter={selectedParameter}
                onParameterChange={setSelectedParameter}
                selectedPeriod={selectedPeriod}
                onPeriodChange={setSelectedPeriod}
            />

            <SensorChart
                data={chartData}
                selectedParameter={selectedParameter}
            />
        </Box>
    );
}

