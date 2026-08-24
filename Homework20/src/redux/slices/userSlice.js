import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [
      {
        id: 1,

        name: "Alice",

        email: "alice@gmail.com",
      },

      {
        id: 2,

        name: "Bob",

        email: "bob@gmail.com",
      },

      {
        id: 3,

        name: "Charlie",

        email: "charlie@gmail.com",
      },

      {
        id: 4,

        name: "David",

        email: "david@gmail.com",
      },

      {
        id: 5,

        name: "Emma",

        email: "emma@gmail.com",
      },

      {
        id: 6,

        name: "Frank",

        email: "frank@gmail.com",
      },

      {
        id: 7,

        name: "Grace",

        email: "grace@gmail.com",
      },

      {
        id: 8,

        name: "Henry",

        email: "henry@gmail.com",
      },

      {
        id: 9,

        name: "Isabella",

        email: "isabella@gmail.com",
      },

      {
        id: 10,

        name: "Jack",

        email: "jack@gmail.com",
      },
    ],
  },
  reducers: {},
});

export default userSlice.reducer;
