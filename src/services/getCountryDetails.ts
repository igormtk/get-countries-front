import axios from "axios";

export const getCountryDetails = async (code: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/countries/${code}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching country details:', error);
    throw error;
  }
};
