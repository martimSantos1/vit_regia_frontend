export type SensorData = {
    conductivity: number;
    dissolvedOxygen: number;
    ph: number;
    tds: number;
    temperature: number;
    timestamp: string;
    turbidity: number;
};

export type SensorType = "temperature" | "ph" | "tds" | "conductivity" | "dissolvedOxygen" | "turbidity" | "all";

export const explanations: Record<string, string> = {
    "Temperatura": "A temperatura da água influencia a solubilidade do oxigénio e a atividade biológica.",
    "pH": "O pH ideal da água potável varia entre 6,5 e 8,5. Valores fora deste intervalo podem indicar contaminação ou desequilíbrio químico.",
    "TDS": "TDS (Total de Sólidos Dissolvidos) indica a quantidade de substâncias dissolvidas na água, geralmente medida em ppm.",
    "Condutividade": "A condutividade elétrica da água reflete a presença de sais dissolvidos e outros minerais.",
    "Oxigénio Dissolvido": "O oxigénio dissolvido é essencial para a vida aquática. Valores baixos podem indicar poluição.",
    "Turbidez": "A turbidez mede a clareza da água. Valores altos podem indicar a presença de partículas suspensas, como sedimentos ou poluentes.",
};

export type PeriodOption = '1h' | '3h' | '6h' | '12h' | '1d' | '3d' | '7d' | '30d' | '90d' | '180d' | '1y';

export const COLORS: Record<SensorType, string> = {
    temperature: "#ff7300",
    ph: "#8884d8",
    tds: "#00C49F",
    conductivity: "#FFBB28",
    dissolvedOxygen: "#0088FE",
    turbidity: "#FF0000",
    all: "#000000",
};

export const LABELS: Record<SensorType, string> = {
    temperature: "Temperatura (ºC)",
    ph: "pH",
    tds: "TDS (ppm)",
    conductivity: "Condutividade (µS/cm)",
    dissolvedOxygen: "Oxigénio Dissolvido (mg/L)",
    turbidity: "Turbidez (NTU)",
    all: "Todos os Parâmetros",
};