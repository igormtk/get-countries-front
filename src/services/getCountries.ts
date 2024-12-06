import axios from "axios";


export const getCountries = async () => {
  try {
    const response = await axios.get('http://localhost:8000/countries/available');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};
