import { axiosInstance } from "services/axios/axios";

export const messageBaseUrl = '/message';

export const createMessageAPI = async (messageData: any) => {
  const {data} = await axiosInstance.post(`${messageBaseUrl}`, messageData);
  return;
};

export const deleteMessageAPI = async (messageId: number) => {
  const {data} = await axiosInstance.delete(`${messageBaseUrl}/${messageId}`);
  return;
};
