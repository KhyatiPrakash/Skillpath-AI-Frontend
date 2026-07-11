import axios from "axios";

const API_URL = "http://localhost:3000/api/careers";

export const getAllCareers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const searchCareers = async (keyword) => {
  const response = await axios.get(`${API_URL}/search?keyword=${keyword}`);
  return response.data;
};

export const filterCareers = async (category) => {
  const response = await axios.get(`${API_URL}/filter?category=${category}`);
  return response.data;
};

export const getCareerById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};