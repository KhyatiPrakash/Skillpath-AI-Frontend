import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

console.log("Using API:", API_URL);

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(
    `${API_URL}/profile`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const saveCareer = async (careerId) => {
  const response = await axios.post(
    `${API_URL}/save-career/${careerId}`,
    {},
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const getSavedCareers = async () => {
  const response = await axios.get(
    `${API_URL}/saved-careers`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};

export const removeSavedCareer = async (careerId) => {
  const response = await axios.delete(
    `${API_URL}/save-career/${careerId}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
};