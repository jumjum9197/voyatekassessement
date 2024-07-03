import axios from 'axios';

const API_URL = 'https://beeceptor.com/crud-api/';

export const createData = async (data:any) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data', error);
    throw error;
  }
};

export const readData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error reading data', error);
    throw error;
  }
};

export const updateData = async (id:any, data:any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data', error);
    throw error;
  }
};

export const deleteData = async (id:any) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data', error);
    throw error;
  }
};
