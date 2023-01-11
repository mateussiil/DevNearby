import axios from 'axios';
import getEnvVars from '../utils/variables';

const api = axios.default.create({
  baseURL: getEnvVars(process.env.NODE_ENV, "BASE_URL"),
});

export default api;