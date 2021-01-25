import { axiosInstance } from "services/axios/axios";

export const messageBaseUrl = '/message';

export const createMessageKey = '/create-message';
export const createMessageAPI = async (messageData: any) => {
  const {data} = await axiosInstance.post(`${messageBaseUrl}`, messageData);
  return;
};
