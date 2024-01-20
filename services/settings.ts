import axios from "axios";

const API_PORT = 1999;
const API_URL = `http://localhost:${API_PORT}/api/`;
const axiosInstance = axios.create({ baseURL: API_URL });

export { axiosInstance };
