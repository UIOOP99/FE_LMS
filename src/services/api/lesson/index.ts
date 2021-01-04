import { axiosInstance } from "services/axios/axios";

export const lessonBaseUrl = '/lesson';

export const classroomInfoKey = '/classroom-info';
export const classroomInfoFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/classroom`);
  return data.classroom;
};

export const lessonMessagesKey = '/lesson-messages';
export const lessonMessagesFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/messages`);
  return data.messages;
};