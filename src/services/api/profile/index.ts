import { axiosInstance } from "./../../axios/axios";

export const profileUrl = '/profile'
export const profileFetcher = async (key: string) => {
  const res = await axiosInstance.get(profileUrl);
  return res.data;
};
