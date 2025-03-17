import axios from "axios";

const API_URL = "http://localhost:8000/risks";

export const getRisks = async () => await axios.get(API_URL);
export const addRisk = async (risk) => await axios.post(API_URL, risk);
export const updateRisk = async (id, risk) =>
  await axios.put(`${API_URL}/${id}`, risk);
export const deleteRisk = async (id) => await axios.delete(`${API_URL}/${id}`);
