import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getData, getDataByRange } from "../../services/data-services";
import { SensorCard } from "./cards/sensorCard";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Snackbar,
    Alert
} from "@mui/material";
import { SensorDialog } from "./cards/sensorDialog";
import { SensorChart } from "./charts/sensorChart";
import { ParameterSelect } from "./charts/parameterSelect";
import { SensorData, SensorType, PeriodOption, explanations, Status } from "./dashboard-types";
import { ThresholdEditor } from "./editors/thresholdEditor";

export default function Dashboard() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [data, setData] = useState<SensorData | null>(null);
    const [chartData, setChartData] = useState<SensorData[]>([]);
    const [selectedParameter, setSelectedParameter] = useState<SensorType>("all");
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodOption>("1h");

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedSensor, setSelectedSensor] = useState<{ label: string; explanation: string } | null>(null);

    const [isLoadingLiveData, setIsLoadingLiveData] = useState(true);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [previousStatusMap, setPreviousStatusMap] = useState<Map<string, Status>>(new Map());

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
        console.log("Utilizador", user);
        console.log("Role do utilizador:", user?.role?.id);
        fetchLatestData();
        const intervalId = setInterval(fetchLatestData, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        fetchChartData();
    }, [selectedPeriod]);

    useEffect(() => {
        if (!data) return;

        const newAlerts: string[] = [];
        const newStatusMap = new Map<string, Status>();

        const statusMap: [string, Status][] = [
            ["Temperatura", data.temperatureStatus],
            ["pH", data.phStatus],
            ["Turbidez", data.turbidityStatus],
            ["TDS", data.tdsStatus],
            ["Oxigénio Dissolvido", data.dissolvedOxygenStatus],
        ];

        for (const [sensor, currentStatus] of statusMap) {
            const previousStatus = previousStatusMap.get(sensor);
            newStatusMap.set(sensor, currentStatus);

            if (currentStatus === "critical" && previousStatus !== "critical") {
                newAlerts.push(sensor);
            }
        }

        setPreviousStatusMap(newStatusMap);

        if (newAlerts.length > 0) {
            const sensorList = newAlerts.join(", ");
            const message =
                newAlerts.length === 1
                    ? `Alerta crítico em ${sensorList}`
                    : `Alertas críticos em: ${sensorList}`;

            setAlertMessage(message);
            setShowAlert(true);
        }

    }, [data]);

    if (!user) {
        return (
            <Dialog open={true} onClose={() => navigate('/')}>
                <DialogTitle>Autenticação Necessária</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para aceder ao dashboard, é necessário iniciar sessão ou criar uma conta.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/')}>Voltar</Button>
                </DialogActions>
            </Dialog>
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
                    value={data?.temperature}
                    maxValue={100}
                    unit="ºC"
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("Temperatura")} />
                <SensorCard
                    label="pH"
                    sensorType="ph"
                    value={data?.ph}
                    maxValue={14}
                    unit=""
                    loading={isLoadingLiveData}
                    width={{ xs: "100%", sm: "48%", md: "40%" }}
                    onClick={() => handleOpen("pH")} />
            </Box>

            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={4} justifyContent="center" mb={2}>
                <SensorCard label="TDS" sensorType="tds" value={data?.tds} maxValue={5000} unit="ppm" loading={isLoadingLiveData} width={{ xs: "100%", sm: "33%", md: "25%" }} onClick={() => handleOpen("TDS")} />
                <SensorCard label="Oxigénio Dissolvido" sensorType="dissolvedOxygen" value={data?.dissolvedOxygen} maxValue={20} unit="mg/L" loading={isLoadingLiveData} width={{ xs: "100%", sm: "33%", md: "25%" }} onClick={() => handleOpen("Oxigénio Dissolvido")} />
                <SensorCard label="Turbidez" sensorType="turbidity" value={data?.turbidity} maxValue={1000} unit="NTU" loading={isLoadingLiveData} width={{ xs: "100%", sm: "33%", md: "25%" }} onClick={() => handleOpen("Turbidez")} />
            </Box>

            {data && (
                <Typography variant="body2" color="textSecondary" textAlign="right">
                    Última atualização: {new Date(data.timestamp).toLocaleString()}
                </Typography>
            )}

            {user?.role?.id === 2 && <ThresholdEditor />}

            {selectedSensor && (
                <SensorDialog
                    open={openDialog}
                    onClose={handleClose}
                    sensorLabel={selectedSensor.label}
                    explanation={selectedSensor.explanation} />
            )}

            <Snackbar
                open={showAlert}
                autoHideDuration={6000}
                onClose={() => setShowAlert(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={() => setShowAlert(false)} severity="error" sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>

            <ParameterSelect
                selectedParameter={selectedParameter}
                onParameterChange={setSelectedParameter}
                selectedPeriod={selectedPeriod}
                onPeriodChange={setSelectedPeriod} />

            <SensorChart data={chartData} selectedParameter={selectedParameter} />
        </Box>
    );
}