import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};