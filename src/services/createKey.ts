import { AxiosResponse } from "axios";
import api from "./api";

const createResource = "/keys"

const formatTime = (d :Date) => {
  d.setHours(d.getHours()+1);
  return d.toISOString();
}

interface createResponse {
  id: string;
  expiration: string;
}

const createKey = async (scope: string) => {
  try {
    const expiration = formatTime(new Date());
    const reqBody = {
      scope,
      expiration,
    }
    const response: AxiosResponse = await api.post(createResource, reqBody)  
    
    const result: createResponse = {
      id: response.data.keyID,
      expiration: response.data.expiration,
    } 
    return result
  } catch (error) {
    const message = error?.response?.data?.message
    if (message) {
      throw new Error(message)
    }
    throw error
  }
}

export default createKey;