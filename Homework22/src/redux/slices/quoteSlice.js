import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await axios.get("/api/api/random");

    console.log("API:", response.data);

    return response.data;
  }
);

const quoteSlice = createSlice({
  name: "quote",

  initialState: {
    quote: null,
    author: null,
    status: "idle",
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        console.log("FULFILLED:", action.payload);

        state.status = "succeeded";
        state.quote = action.payload[0].q;
        state.author = action.payload[0].a;
      })

      .addCase(fetchRandomQuote.rejected, (state, action) => {
        console.log("REJECTED:", action.error);

        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;