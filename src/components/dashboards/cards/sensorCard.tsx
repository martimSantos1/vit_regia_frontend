import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getProgressColorPerType } from "../../../utils/getProgressColorPerType";
import { SensorType } from "../dashboard-types";

type SensorCardProps = {
    label: string;
    sensorType: SensorType;
    value: number | undefined;
    maxValue: number;
    unit?: string;
    loading?: boolean;
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

    // Valor animado
    const [animatedValue, setAnimatedValue] = useState(value ?? 0);
    const animationRef = useRef<number | null>(null);

    // Animação quando `value` muda
    useEffect(() => {
        const startValue = animatedValue;
        const endValue = value ?? 0;
        const duration = 1000; // duração da animação em ms
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const newValue = startValue + (endValue - startValue) * progress;
            setAnimatedValue(newValue);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [value]);

    const progress = Math.min(animatedValue / maxValue, 1);
    const strokeDashoffset = circumference * (1 - progress);
    const color = getProgressColorPerType(sensorType, animatedValue);

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
                        {Math.round(animatedValue)}
                        {unit && <span style={{ fontSize: "0.75rem" }}> {unit}</span>}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};