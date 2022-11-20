import axios from 'axios';

axios.defaults.baseURL = 'https://api.nasa.gov/';

axios.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: import.meta.env.VITE_API_KEY };
  return config;
});
