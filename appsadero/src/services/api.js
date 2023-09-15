import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.84:3000/api",
  timeout: 5000,
  //10.0.2.2  ==> 'localhost' del movil
  //127.0.0.1 ==> 'android'
  // 192.168.1.22
});
