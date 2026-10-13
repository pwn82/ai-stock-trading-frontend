import apiClient from "./apiClient";

export async function runStockAnalysis(payload) {

  const response = await apiClient.post(
    "/api/analysis/run",
    payload
  );

  return response.data;
}