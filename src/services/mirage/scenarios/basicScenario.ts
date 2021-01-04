import { Server } from "miragejs";

export default (server: Server) => {
  server.createList('user', 5);
  server.createList('classroom', 4);
  server.createList('message', 15);
};