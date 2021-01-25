import { zipWith } from "lodash";
import { axiosInstance } from "services/axios/axios";

export const mainBaseUrl = '/home';

export const timelineMessagesKey = '/timeline-messages';
export const timelineMessagesFetcher = async (key: string, lessonFilter: string) => {
  const {data} = await axiosInstance.get(`${mainBaseUrl}/messages`, {
    params: {
      filter: lessonFilter,
      include: 'classroom'
    }
  });
  
  const messages = zipWith(data.messages, data.users, data.classrooms, 
    (a:any, b:any, c:any) => ({...a, user: b, classroom: c})
    );
  return messages.map((message: any) => {
    let user;
    if (!!message.user) {user = message.user;}
    else {user = data.users[data.users.length - 1];}
    let classroom;
    if (!!message.classroom) {classroom = message.classroom;}
    else {classroom = data.users[data.users.length - 1];}
    return ({
    ...message,
    user,
    classroom,
    });
  });
};

export const allSessionsKey = '/all-sessions';
export const allSessionsFetcher = async (key: string) => {
  const {data} = await axiosInstance.get(`${mainBaseUrl}/all-sessions`);
  return data.sessions;
};