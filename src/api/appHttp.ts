import axios from "axios";
import toast from "react-hot-toast";

const baseURL = "https://v3.football.api-sports.io/";
const headers = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "2e539a399208f2e71c40b50c0b4fac4f"
};

const appHttp = async (axiosParams = {}) => {
    const instance = axios.create({
        baseURL: baseURL,
        headers,
        ...axiosParams,
    });

    return instance;
};

export default appHttp;
