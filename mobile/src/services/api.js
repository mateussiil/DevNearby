import axios from 'axios';
import getEnvVars from '../utils/variables';

const api = axios.default.create({
  baseURL: "http://192.168.153.1:3333",
});

export default api;