import axios from "axios";

const api_url = process.env.EXPO_PUBLIC_API_URL;

const server = axios.create({baseURL:`${api_url}/people`});

export default server;