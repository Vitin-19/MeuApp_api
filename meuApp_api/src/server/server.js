import axios from "axios";

const api_url = process.env.API_URL

const server = axios.create({baseURL:api_url})

export default server;