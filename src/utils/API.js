import axios from 'axios';

// TODO: Change baseURL
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
});

api.fetchResource = async (resource, id) => {
  const response = await api.get(`/${resource}/${id}`);
  return response.data;
};

export default api;
