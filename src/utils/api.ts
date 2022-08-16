import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_MIDDLEWARE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
