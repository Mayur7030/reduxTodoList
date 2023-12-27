export const addtask = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: Math.random(),
      data: data,
    },
  };
};
export const deletetask = (id) => {
  return {
    type: "DELETE_TASK",
    id: id,
  };
};
export const removetask = (data) => {
  return {
    type: "REMOVE_TASK",
  };
};
