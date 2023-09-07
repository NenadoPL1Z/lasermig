import axios from "axios";
import { API_URL, TIMEOUT } from "@/lib/constants";

const createInstance = () => {
  const config = axios.create({
    baseURL: API_URL,
    timeout: TIMEOUT,
  });

  return config;
};

export const axiosProject = createInstance();
