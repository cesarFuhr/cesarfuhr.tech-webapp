import { AxiosResponse } from "axios";
import api from "./api";

const createResource = "/encrypt"

interface encryptResponse {
  cypher: string;
}

const encrypt = async (key: string, text: string) => {
  const reqBody = {
    keyID: key,
    data: text,
  }
  console.log(reqBody)
  const response: AxiosResponse = await api.post(createResource, reqBody)  
  
  const result: encryptResponse = {
    cypher: response.data.encryptedData,
  } 
  return result
}

export default encrypt;