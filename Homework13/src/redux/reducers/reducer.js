const initialState = {
  users: [
    {
      id: 1,
      name: "Anna",
    },
    {
      id: 2,
      name: "Roman",
    },
    {
      id: 3,
      name: "Oliver",
    },
  ],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,

        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
