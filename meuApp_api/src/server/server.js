import axios from "axios";

const api_url = process.env.EXPO_PUBLIC_API_URL;

const server = axios.create({baseURL:"https://vwjuq-2804-14c-4a2-4f61-592-8334-8a50-9899.a.free.pinggy.link/people"})

export default server;