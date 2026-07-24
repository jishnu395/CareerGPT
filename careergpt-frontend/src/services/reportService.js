import api from "./api";

export const getReport = async (sessionId) => {
  const token = localStorage.getItem("token");

  const response = await api.get(`/report/${sessionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};