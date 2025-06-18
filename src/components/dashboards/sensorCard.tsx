import React from "react";
import { Box, Typography } from "@mui/material";
import { SensorType, getProgressColorPerType } from "../../utils/getProgressColorPerType";

type SensorCardProps = {
    label: string;
    sensorType: SensorType;
    value: number;
    maxValue: number;
    unit?: string;
    width: { xs: string; sm: string; md: string };
    onClick?: () => void;
};

export const SensorCard: React.FC<SensorCardProps> = ({
    label,
    sensorType,
    value,
    maxValue,
    unit,
    width,
    onClick,
}) => {
    const radius = 45;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = Math.min(value / maxValue, 1);
    const strokeDashoffset = circumference * (1 - progress);
    const color = getProgressColorPerType(sensorType, value);

    return (
        <Box
            sx={{
                width,
                p: 3,
                borderRadius: 4,
                boxShadow: 2,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: onClick ? "pointer" : "default",
                transition: "transform 0.2s",
                "&:hover": onClick ? { transform: "scale(1.02)" } : {},
            }}
            onClick={onClick}
        >
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold" }}>
                {label}
            </Typography>

            <Box position="relative" width={120} height={120} mt={1} mb={1}>
                <svg height="120" width="120">
                    {/* Parte incompleta (fundo) */}
                    <circle
                        stroke="#e0e0e0"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx="60"
                        cy="60"
                        strokeDasharray={circumference}
                        strokeDashoffset={0}
                        transform="rotate(-90 60 60)"
                    />

                    {/* Parte preenchida */}
                    <circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        r={normalizedRadius}
                        cx="60"
                        cy="60"
                        transform="rotate(-90 60 60)"
                    />
                </svg>

                {/* Texto central */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h6">
                        {value}
                        {unit && <span style={{ fontSize: "0.75rem" }}> {unit}</span>}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};