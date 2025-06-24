import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography } from "@mui/material";
import { SensorType } from "../dashboard-types";
import { SensorData, COLORS, LABELS } from "../dashboard-types";


type SensorChartProps = {
    data: SensorData[];
    selectedParameter: SensorType | "all";
};

export const SensorChart: React.FC<SensorChartProps> = ({ data, selectedParameter }) => {
    return (
        <Box mt={4}>
            <Typography variant="h5" gutterBottom>
                Evolução Temporal
            </Typography>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" tickFormatter={(v) => new Date(v).toLocaleTimeString()} />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {selectedParameter === "all"
                        ? (Object.keys(COLORS) as SensorType[]).map((key) => (
                              <Line
                                  key={key}
                                  type="monotone"
                                  dataKey={key}
                                  stroke={COLORS[key]}
                                  name={LABELS[key]}
                                  dot={false}
                              />
                          ))
                        : (
                            <Line
                                type="monotone"
                                dataKey={selectedParameter}
                                stroke={COLORS[selectedParameter]}
                                name={LABELS[selectedParameter]}
                                dot={false}
                            />
                        )}
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};
