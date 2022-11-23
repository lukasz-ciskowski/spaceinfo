import axios from 'axios';

const NASA_URL = 'https://api.nasa.gov/';
axios.defaults.baseURL = NASA_URL;

axios.interceptors.request.use((config) => {
  if (config.baseURL === NASA_URL) config.params = { ...config.params, api_key: import.meta.env.VITE_API_KEY };
  return config;
});
