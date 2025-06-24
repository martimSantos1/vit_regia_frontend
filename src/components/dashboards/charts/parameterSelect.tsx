import React from "react";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Box,
} from "@mui/material";
import { SensorType, PeriodOption } from "../dashboard-types";

type Props = {
    selectedParameter: SensorType | "all";
    onParameterChange: (value: SensorType | "all") => void;
    selectedPeriod: PeriodOption;
    onPeriodChange: (value: PeriodOption) => void;
};

export const ParameterSelect: React.FC<Props> = ({
    selectedParameter,
    onParameterChange,
    selectedPeriod,
    onPeriodChange,
}) => {
    const handleParameterChange = (event: SelectChangeEvent) => {
        onParameterChange(event.target.value as SensorType | "all");
    };

    const handlePeriodChange = (event: SelectChangeEvent) => {
        onPeriodChange(event.target.value as PeriodOption);
    };

    return (
        <Box display="flex" gap={2} flexWrap="wrap" mb={2} paddingTop={5}>
            <FormControl sx={{ width: 150 }}>
                <InputLabel>Período</InputLabel>
                <Select value={selectedPeriod} label="Período" onChange={handlePeriodChange}>
                    <MenuItem value="1h">Última 1 hora</MenuItem>
                    <MenuItem value="3h">Últimas 3 horas</MenuItem>
                    <MenuItem value="6h">Últimas 6 horas</MenuItem>
                    <MenuItem value="12h">Últimas 12 horas</MenuItem>
                    <MenuItem value="1d">Último dia</MenuItem>
                    <MenuItem value="3d">Últimos 3 dias</MenuItem>
                    <MenuItem value="7d">Última semana</MenuItem>
                    <MenuItem value="30d">Últimos 30 dias</MenuItem>
                    <MenuItem value="90d">Últimos 90 dias</MenuItem>
                    <MenuItem value="180d">Últimos 180 dias</MenuItem>
                    <MenuItem value="1y">Último ano</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: 250 }}>
                <InputLabel>Parâmetro</InputLabel>
                <Select value={selectedParameter} label="Parâmetro" onChange={handleParameterChange}>
                    <MenuItem value="all">Todos</MenuItem>
                    <MenuItem value="temperature">Temperatura</MenuItem>
                    <MenuItem value="ph">pH</MenuItem>
                    <MenuItem value="tds">TDS</MenuItem>
                    <MenuItem value="conductivity">Condutividade</MenuItem>
                    <MenuItem value="dissolvedOxygen">Oxigénio Dissolvido</MenuItem>
                    <MenuItem value="turbidity">Turbidez</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};
