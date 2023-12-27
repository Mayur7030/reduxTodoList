const initialData = {
  list: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TASK":
      const newList = state.list.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TASK":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default reducer;
