import api from "./api";

export const startSession = async () => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/session/start",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  localStorage.setItem("sessionId", response.data.id);

  return response.data;
};