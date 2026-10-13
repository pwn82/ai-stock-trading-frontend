import apiClient from "./apiClient";


export async function scanCsvFiles() {

  const response = await apiClient.post(
    "/api/files/scan"
  );

  return response.data;
}


export async function getCsvFiles() {

  const response = await apiClient.get(
    "/api/files"
  );

  return response.data;
}


export async function searchCsvFiles(
  stockSymbol,
  question
) {

  const response = await apiClient.post(
    "/api/files/search",
    {
      stock_symbol: stockSymbol,
      question
    }
  );

  return response.data;
}