import { axiosInstance } from "services/axios/axios";

export const lessonUrl = '/lesson';

export const lessonMessagesFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonUrl}/${lessonId}/messages`);
  return data;
};