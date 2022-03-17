import axios from "axios";
import config from "./config";

const httpClient = axios.create({ baseURL: config.api });

export default httpClient;
