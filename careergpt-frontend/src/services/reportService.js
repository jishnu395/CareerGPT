import api from "./api";

export const getReport = async (sessionId) => {
  const response = await api.get(`/report/${sessionId}`);

  return response.data;
};