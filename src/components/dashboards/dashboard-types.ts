export type SensorData = {
    dissolvedOxygen: number;
    ph: number;
    tds: number;
    temperature: number;
    timestamp: string;
    turbidity: number;
    dissolvedOxygenStatus: Status;
    phStatus: Status;
    tdsStatus: Status;
    temperatureStatus: Status;
    turbidityStatus: Status;
};

export type Status = "good" | "alarming" | "critical";

export type SensorType = "temperature" | "ph" | "tds" | "dissolvedOxygen" | "turbidity" | "all";

export const explanations: Record<string, string> = {
    "Temperatura": "A temperatura da água influencia a solubilidade do oxigénio e a atividade biológica.",
    "pH": "O pH ideal da água potável varia entre 6,5 e 8,5. Valores fora deste intervalo podem indicar contaminação ou desequilíbrio químico.",
    "TDS": "TDS (Total de Sólidos Dissolvidos) indica a quantidade de substâncias dissolvidas na água, geralmente medida em ppm.",
    "Oxigénio Dissolvido": "O oxigénio dissolvido é essencial para a vida aquática. Valores baixos podem indicar poluição.",
    "Turbidez": "A turbidez mede a clareza da água. Valores altos podem indicar a presença de partículas suspensas, como sedimentos ou poluentes.",
};

export type PeriodOption = '1h' | '3h' | '6h' | '12h' | '1d' | '3d' | '7d' | '30d' | '90d' | '180d' | '1y';

export const COLORS: Record<SensorType, string> = {
    temperature: "#ff7300",
    ph: "#8884d8",
    tds: "#00C49F",
    dissolvedOxygen: "#0088FE",
    turbidity: "#FF0000",
    all: "#000000",
};

export const LABELS: Record<SensorType, string> = {
    temperature: "Temperatura (ºC)",
    ph: "pH",
    tds: "TDS (ppm)",
    dissolvedOxygen: "Oxigénio Dissolvido (mg/L)",
    turbidity: "Turbidez (NTU)",
    all: "Todos os Parâmetros",
};