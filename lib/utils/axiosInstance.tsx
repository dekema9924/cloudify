
import axios from "axios";


console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
console.log("mongo URL:", process.env.MONGODB_URI);

const axiosInstance = axios.create({

    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;