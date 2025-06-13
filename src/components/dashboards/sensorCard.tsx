import React, { useMemo } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { SensorType, getProgressColorPerType } from "./getProgressColorPerType";

type SensorCardProps = {
    label: string;
    sensorType: SensorType;
    value: number;
    maxValue: number;
    unit?: string;
    width: { xs: string; sm: string; md: string };
};

export const SensorCard: React.FC<SensorCardProps> = ({ label, sensorType, value, maxValue, unit, width }) => {
    const progress = Math.min((value / maxValue) * 100, 100);
    const color = useMemo(() => getProgressColorPerType(sensorType, value), [sensorType, value]);

    return (
        <Box
            sx={{
                width,
                p: 2,
                borderRadius: 4,
                boxShadow: 2,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="subtitle1" gutterBottom>
                {label}
            </Typography>

            <Box position="relative" display="inline-flex" mb={1}>
                <CircularProgress
                    variant="determinate"
                    value={100}
                    size={100}
                    sx={{ color: "#e0e0e0", position: "absolute" }}
                />
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={100}
                    sx={{ color }}
                />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h6">{value.toFixed(2)}</Typography>
                </Box>
            </Box>

            {unit && (
                <Typography variant="body2" color="textSecondary">
                    {unit}
                </Typography>
            )}
        </Box>
    );
};
