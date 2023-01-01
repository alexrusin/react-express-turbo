import axios from "axios";
import { getTokens } from "frontend-cookies";

const [access_token] = getTokens(["access_token"]);

const headers = {
  "Content-Type": "application/json",
};

const client = axios.create({
  headers,
});

if (access_token) {
  client.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
}

client.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export default client;
