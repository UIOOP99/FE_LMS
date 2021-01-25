import { axiosInstance } from "services/axios/axios";

export const userBaseUrl = '/users';

export const profileKey = '/profile';
export const profileFetcher = async (key: string, userId: any) => {
  const {data} = await axiosInstance.get(`${userBaseUrl}/${userId}/profile`);
  return data.profile;
};

export const lessonsKey = '/lessons';
export const lessonsFetcher = async (key: string, userId: any) => {
  const {data} = await axiosInstance.get(`${userBaseUrl}/${userId}/lessons`);
  return data;
};


export const sessionsKey = '/sessions';
export const sessionsFetcher = async (key: string, userId: any) => {
  const {data} = await axiosInstance.get(`${userBaseUrl}/${userId}/sessions`);
  return data;
};
