import axios from 'axios';

// TODO: Change baseURL
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
});

api.fetchResource = async (resource, id) => {
  const requestId = id ? `/${id}` : '';
  const response = await api.get(`/${resource}${requestId}`);
  return response.data;
};

export default api;
