import axios from 'services/axiosInstance';

export const fetchTodo = async (url: string) => {
  return axios.get(url);
};

export const fetchMultiRequest = async (url: string) => {
  return axios.get(url);
};
