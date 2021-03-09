import axios from "axios";

const baseUrl = "https://www.cesarfuhr.tech/api";
const instance = axios.create({
  timeout: 5000,
});

interface createKeyResponse {
  keyID: string,
  expiration: string;
  publicKey: string;
}

const api = {
  post: (resource: string,  body: any) => {
    return instance.post<createKeyResponse>(`${baseUrl}${resource}`, body);
  }
}

export default api;