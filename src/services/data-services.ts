import dataApi from "./api/dataApi";

export async function getData(numOfRecords: number) {
  try {
    const response = await dataApi.get("/data/getLastData?numberOfData=" + numOfRecords);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer login:", error);
    return {
      error: error.response?.data?.error || "Erro ao comunicar com o servidor",
    };
  }
}
