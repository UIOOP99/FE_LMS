import { axiosInstance } from "services/axios/axios";

export const mainBaseUrl = '/home';

export const timelineMessagesKey = '/timeline-messages';
export const timelineMessagesFetcher = async (key: string, lessonFilter: string) => {
  const {data} = await axiosInstance.get(`${mainBaseUrl}/messages`, {
    params: {
      filter: lessonFilter,
    }
  });
  return data.messages;
};
