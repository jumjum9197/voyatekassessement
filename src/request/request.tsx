import axios from 'axios';

const API_URL = 'https://beeceptor.com/crud-api/';

export const createData = async (data:any) => {
  try {
    const response = await axios.post('https://cac23fa2d25c336d3d0b.free.beeceptor.com/api/users/', data);
    return response.data;
  } catch (error) {
    console.error('Error creating data', error);
    throw error;
  }
};

export const readData = async () => {
  try {
    const response = await axios.get('https://cac23fa2d25c336d3d0b.free.beeceptor.com/api/users/');
    return response.data;
  } catch (error) {
    console.error('Error reading data', error);
    throw error;
  }
};

export const updateData = async (id:any, data:any) => {
  try {
    const response = await axios.put(`${'https://cac23fa2d25c336d3d0b.free.beeceptor.com/api/users/'}/${1}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data', error);
    throw error;
  }
};

export const deleteData = async (id:any) => {
  try {
    const response = await axios.delete(`${'https://cac23fa2d25c336d3d0b.free.beeceptor.com/api/users/'}/${1}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data', error);
    throw error;
  }
};
