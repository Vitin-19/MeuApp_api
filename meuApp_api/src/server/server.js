import axios from "axios";

const api_url = process.env.EXPO_PUBLIC_API_URL.trim();

const server = axios.create({baseURL:`${api_url}/people`});

export default server;