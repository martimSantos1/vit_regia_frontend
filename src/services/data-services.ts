import dataApi from "./api/dataApi";

export async function getData(numOfRecords: number) {
    try {
        const response = await dataApi.get("/data/getLastData?numberOfData=" + numOfRecords);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao buscar últimos n dados:", error);
        return {
            error: error.response?.data?.error || "Erro ao comunicar com o servidor",
        };
    }
}

export async function getDataByRange(range: string) {
    try {
        const response = await dataApi.get("/data/getDataByRange?range=" + range);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao buscar dados por intervalo:", error);
        return {
            error: error.response?.data?.error || "Erro ao comunicar com o servidor",
        };
    }
}

export async function getThresholds() {
    try {
        const response = await dataApi.get("/data/getThresholds");
        return response.data;
    } catch (error: any) {
        console.error("Erro ao buscar limites:", error);
        return {
            error: error.response?.data?.error || "Erro ao comunicar com o servidor",
        };
    }
}

export async function updateThresholds(thresholds: any) {
    try {
        const response = await dataApi.put("/data/updateThresholds", thresholds);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao atualizar limites:", error);
        return {
            error: error.response?.data?.error || "Erro ao comunicar com o servidor",
        };
    }
}