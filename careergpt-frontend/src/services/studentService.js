import api from "./api";

export const createStudent = async (student) => {
  return api.post("/student", student);
};