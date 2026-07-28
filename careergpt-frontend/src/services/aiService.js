import api from "./api";

export const sendAnswer = async (sessionId, content) => {
  const response = await api.post("/ai/answer", {
    sessionId,
    content,
  });

  return response.data;
};