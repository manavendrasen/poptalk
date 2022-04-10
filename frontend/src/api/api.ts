import axios from "axios";

export const BASE_URL = "http://localhost:5000/api/v1";

export const USER_ENDPOINT = "/user";
export const POST_ENDPOINT = "/post";

const API = axios.create({ baseURL: BASE_URL });

export default API;