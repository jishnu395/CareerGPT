import api from "./api";

export const startSession = async (studentId) => {
  const response = await api.post(`/session/start/${studentId}`);

  sessionStorage.setItem("sessionId", response.data.id);

  return response.data;
};