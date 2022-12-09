import axios from "axios";
import Cookies from "js-cookie";
import CONST from "../utils/constant/constant";


const config = {
    baseURL: CONST.BASE_API_URL,
    headers: {
        Authorization: `Bearer ${Cookies.get("cookiename")}`
    }
}

export const axiosInstance = axios.create(config)