import { AxiosResponse } from "axios";
import api from "./api";

const decryptResource = "/decrypt"

interface decryptResponse {
  text: string;
}

const createKey = async (key: string, cypher: string) => {
  try {
    const reqBody = {
      keyID: key,
      encryptedData: cypher,
    }
    const response: AxiosResponse = await api.post(decryptResource, reqBody)  
    
    const result: decryptResponse = {
      text: response.data.data,
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