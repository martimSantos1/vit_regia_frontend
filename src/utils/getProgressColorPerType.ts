export type SensorType = "temperature" | "ph" | "tds" | "conductivity" | "oxygen" | "turbidity";

export function getProgressColorPerType(tipo: SensorType, valor: number): string {
    switch (tipo) {
        case "temperature":
            if (valor < 10) return "#2196f3"; // muito frio
            if (valor < 25) return "#4caf50"; // ideal
            if (valor < 35) return "#ff9800"; // quente
            return "#f44336"; // muito quente

        case "ph":
            if (valor < 5.5) return "#f44336";
            if (valor < 6.5) return "#ff9800";
            if (valor <= 8.5) return "#4caf50";
            if (valor <= 9.5) return "#ff9800";
            return "#f44336";

        case "tds":
            if (valor < 300) return "#4caf50";
            if (valor < 600) return "#ffeb3b";
            if (valor < 1000) return "#ff9800";
            return "#f44336";

        case "conductivity":
            if (valor < 500) return "#4caf50";
            if (valor < 1000) return "#ff9800";
            return "#f44336";

        case "oxygen":
            if (valor < 3) return "#f44336";
            if (valor < 5) return "#ff9800";
            if (valor < 10) return "#4caf50";
            return "#2196f3";
        case "turbidity":
            return valor > 70 ? "#d32f2f" : valor > 40 ? "#fbc02d" : "#388e3c";
        default:
            return "#4caf50";
    }
}
