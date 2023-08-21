import axios, { AxiosPromise } from "axios";
import { Task } from "../types/Task";

const BASE_URL = "http://localhost:8080/task";

export const TaskService = {
  list: (): AxiosPromise<Task[]> => axios.get(BASE_URL),
};
