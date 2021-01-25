import { zipWith } from "lodash";
import { axiosInstance } from "services/axios/axios";

export const lessonBaseUrl = '/lesson';

export const classroomInfoKey = '/classroom-info';
export const classroomInfoFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/classroom`);
  return data.classroom;
};

export const lessonMessagesKey = '/lesson-messages';
export const lessonMessagesFetcher = async (key: string, lessonId: any, lessonFilter: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/messages`, {
    params: {
      filter: lessonFilter,
      include: 'classroom'
    }
  });
  return zipWith(data.messages, data.users, 
    (a:any, b:any) => ({...a, user: b})
  );
};

export const lessonMembersKey = '/lesson-members';
export const lessonMembersFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/members`);
  return data.users;
};

export const lessonExamsKey = '/lesson-exams';
export const lessonExamsFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/exams`);
  return data.exams;
};

export const lessonSessionsKey = '/lesson-sessions';
export const lessonSessionsFetcher = async (key: string, lessonId: any) => {
  const {data} = await axiosInstance.get(`${lessonBaseUrl}/${lessonId}/sessions`);
  return data.sessions;
};