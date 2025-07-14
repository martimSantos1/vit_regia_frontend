import { SensorType } from "../components/dashboards/dashboard-types";
import { getThresholds } from "../services/data-services";

type Threshold = {
  goodMin: number;
  goodMax: number;
  alarmingMin: number;
  alarmingMax: number;
};

type Thresholds = Record<SensorType, Threshold>;

export async function getProgressColorPerType(tipo: SensorType, valor: number): Promise<string> {
  try {
    const response = await getThresholds();
    const thresholds = response.thresholds as Thresholds;
    const t = thresholds?.[tipo];

    if (!t) {
      console.warn(`Limites não definidos para o tipo "${tipo}"`);
      return "#d3d3d3";
    }

    if (valor >= t.goodMin && valor <= t.goodMax) return "#4caf50"; // 🟢
    if (valor >= t.alarmingMin && valor <= t.alarmingMax) return "#ff9800"; // 🟠
    return "#f44336"; // 🔴
  } catch (error) {
    console.error("Erro ao obter thresholds:", error);
    return "#d3d3d3";
  }
}