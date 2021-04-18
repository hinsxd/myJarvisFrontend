export const CREATE_TASK = "CREATE_TASK";

export const createNewTask = (taskName, taskDetail, taskDate, execTime) => {
  return {
    type: CREATE_TASK,
    content: { taskName, taskDetail, taskDate, execTime },
  };
};
