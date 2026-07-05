import api from "./api";

export const register = async (student) => {
  const response = await api.post("/auth/register", student);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  localStorage.setItem("token", response.data.token);

  return response.data;
};