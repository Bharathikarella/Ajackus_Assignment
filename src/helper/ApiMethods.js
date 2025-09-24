// helper/ApiMethods.js
import axios from "axios";

export const ApiMethods = {
  GET: (url) => axios.get(url),
  POST: (url, data) => axios.post(url, data),
  PUT: (url, data) => axios.put(url, data),
  DELETE: (url) => axios.delete(url),
};
