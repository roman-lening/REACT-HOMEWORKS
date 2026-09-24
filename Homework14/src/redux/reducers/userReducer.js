const initialState = {
  user: {
    name: "Bob",
    status: "online",
    id: 1,
  },
};

const userReducer = (state = initialState, action) => {
  if (action.type === "SET_USER_INFO") {
    return {
      ...state,
      user: action.payload,
    };
  } else if (action.type === "DELETE_USER") {
    return {
      ...state,
      user: {
        name: "",
        status: "",
        id: null,
      },
    };
  }
  return state;
};

export default userReducer;
