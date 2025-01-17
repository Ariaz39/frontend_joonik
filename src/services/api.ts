import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Interceptor para añadir el header con la API Key
api.interceptors.request.use((config) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  if (config.headers && apiKey) {
    // Puedes usar 'x-api-key' o 'Authorization: Bearer ...'
    config.headers['x-api-key'] = apiKey;
  }
  return config;
});

export default api;
