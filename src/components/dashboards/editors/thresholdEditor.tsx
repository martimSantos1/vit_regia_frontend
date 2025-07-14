import { Box, Button, Grid, Paper, TextField, Typography, Alert, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getThresholds, updateThresholds } from "../../../services/data-services";
import { SensorType } from "../dashboard-types";

type ThresholdField = {
    goodMin: number;
    goodMax: number;
    alarmingMin: number;
    alarmingMax: number;
};

type ThresholdsState = Record<SensorType, ThresholdField>;

export const ThresholdEditor = () => {
    const [thresholds, setThresholds] = useState<ThresholdsState | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getThresholds().then((res) => setThresholds(res.thresholds));
    }, []);

    const handleChange = (
        type: SensorType,
        field: keyof ThresholdField,
        value: string
    ) => {
        setThresholds((prev) =>
            prev
                ? {
                    ...prev,
                    [type]: {
                        ...prev[type],
                        [field]: parseFloat(value)
                    }
                }
                : prev
        );
    };

    const handleSubmit = async () => {
        if (!thresholds) return;
        await updateThresholds(thresholds);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
    };

    if (!thresholds) return null;

    return (
        <Box mt={6} mb={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Painel de Configuração de Limites
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Apenas administradores podem ajustar os limiares de alerta para cada parâmetro.
            </Typography>

            <Grid container spacing={3} mt={1}>
                {Object.entries(thresholds).map(([type, fields]) => (
                    <Grid item xs={12} md={6} key={type}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                {type.toUpperCase()}
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Grid container spacing={2}>
                                {(["goodMin", "goodMax", "alarmingMin", "alarmingMax"] as const).map((field) => (
                                    <Grid item xs={6} key={field}>
                                        <TextField
                                            fullWidth
                                            label={field}
                                            type="number"
                                            value={fields[field]}
                                            onChange={(e) => handleChange(type as SensorType, field, e.target.value)}
                                            size="small"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Box mt={4} textAlign="center">
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                    Guardar Limites
                </Button>
                {success && (
                    <Alert severity="success" sx={{ mt: 3 }}>
                        Limites atualizados com sucesso.
                    </Alert>
                )}
            </Box>
        </Box>
    );
};