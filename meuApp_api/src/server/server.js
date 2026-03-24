import axios from "axios";

const api_url = process.env.API_URL

const server = axios.create({baseURL:"https://auxkz-200-204-33-222.a.free.pinggy.link"})

export default server;