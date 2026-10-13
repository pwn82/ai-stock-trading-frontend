import apiClient from "./apiClient";


export async function askChat(
  question,
  stockSymbol
) {

  const response = await apiClient.post(
    "/api/chat",
    {
      question,
      stock_symbol: stockSymbol || null
    }
  );

  return response.data;
}