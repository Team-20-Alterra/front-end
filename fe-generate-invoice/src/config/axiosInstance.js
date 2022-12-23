import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/constant/constant";


const config = {
    baseURL: CONST.BASE_API_URL,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
    }
}


export const axiosInstance = axios.create(config)
axiosInstance.interceptors.request.use((axiosConfig) => {
    const httpConfig = { ...axiosConfig };
    const token = Cookies.get("cookiename");
    if (token) {
        httpConfig.headers.Authorization = `Bearer ${Cookies.get("cookiename")}`;
    }
    return httpConfig;
});