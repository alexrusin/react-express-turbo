import axios from "axios";
import { eraseCookie, getTokens } from "frontend-cookies";
import useUserStore from "../store/user-store";

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

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      useUserStore.setState({ id: undefined, name: undefined, loading: false });
      eraseCookie("access_token");
      delete client.defaults.headers.common["Authorization"];
    }
    return Promise.reject(error);
  }
);

client
  .get("/api/user")
  .then((response) => {
    const user = response.data;
    user.loading = false;
    useUserStore.setState(user);
  })
  .catch((error) => {
    useUserStore.setState({ loading: false });
  });

export default client;
