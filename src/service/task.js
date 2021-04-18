import axios from "axios";
import authService from "./auth";
const taskService = {
  createTask: (
    taskName,
    taskDetail,
    taskDate,
    dailyExecutionTime,
    oneOffExecutionTime
  ) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}/api/task/create`,
      {
        taskName: taskName,
        taskDetail: taskDetail,
        taskDate: taskDate,
        dailyExecutionTime: dailyExecutionTime,
        oneOffExecutionTime: oneOffExecutionTime,
      },
      {
        headers: authService.authHeader(),
      }
    );
  },
};

export default taskService;
