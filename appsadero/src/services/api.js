import axios from "axios";

export const api = axios.create({
    baseURL:"http://169.254.171.105:3000/api",
    //timeout: 3000
})
