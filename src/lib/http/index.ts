import axios from "axios";
import { BASE_URL, TIMEOUT } from "@/lib/constants";

export const axiosProject = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});
