import axios from "axios";

export const api = axios.create({
    baseURL:"http://10.0.2.2:3000/api",
    timeout: 5000
    //10.0.2.2  ==> 'localhost' del movil
})
