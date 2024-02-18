import axios from 'axios';

const api = () => {
  const baseUrl = axios.create({
    // baseURL: "https://overshotmilkteashop.com/api",
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (localStorage.getItem("token") != null) {
    baseUrl.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;

    return baseUrl;
  }

  return baseUrl;
};

export default api;