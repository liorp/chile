// utils/API.js

import axios from "axios";

// TODO: Change baseURL
export default axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});
