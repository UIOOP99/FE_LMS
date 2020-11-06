import { createBrowserHistory } from "history";
// { basename: "/pannel" }
export const browserHistory = createBrowserHistory(); // add 
export const redirect = (path: string) => {
  browserHistory.push(path);
};
