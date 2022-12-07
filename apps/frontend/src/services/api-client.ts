import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const client = axios.create({
  headers,
});

client.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export default client;
