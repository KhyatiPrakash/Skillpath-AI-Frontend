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

export const createCareer = async (careerData) => {
  const response = await axios.post(
    API_URL,
    careerData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const updateCareer = async (id, careerData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    careerData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const deleteCareer = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};