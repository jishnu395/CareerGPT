import api from "./api";

export const sendAnswer = async (sessionId, content) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/ai/answer",
    {
      sessionId,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};