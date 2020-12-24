import axios from "axios";
import {axiosInterceptor} from "./axiosInterceptor"
const baseURL = "/api";
export const axiosInstance = axios.create({
  baseURL,
});

// export const axiosInstanceNoAuth = axios.create({
//   baseURL: "https://api.restino.ir/accounts/api/v1",
// });

axiosInterceptor(axiosInstance);
