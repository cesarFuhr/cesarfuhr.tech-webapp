import { AxiosResponse } from "axios";
import api from "./api";

const createResource = "/encrypt"

interface encryptResponse {
  cypher: string;
}

const encrypt = async (key: string, text: string) => {
  try {
    const reqBody = {
      keyID: key,
      data: text,
    };
    
    const response: AxiosResponse = await api.post(createResource, reqBody)  
  
    const result: encryptResponse = {
      cypher: response.data.encryptedData,
    } 
    return result;
  } catch (error) {
    const message = error?.response?.data?.message
    if (message) {
      throw new Error(message)
    }
    throw error
  }
}

export default encrypt;