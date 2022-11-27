import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";
export const createTicket = createAsyncThunk(
  "ticket/createTicket",
  async (authData, thunkAPI) => {
    const res = await api.post("ticket/crate/", authData);
    return res.data;
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    title: "",
    user: "",
    status: "",
    priority: "",
    document: "",
    message: "",
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
    setDocument: (state, action) => {
      state.document = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearAllTicketState: (state) => {
      state.title = "";
      state.user = "";
      state.status = "";
      state.priority = "";
      state.document = "";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTicket.pending, () => {});
  },
});

export const {
  setTitle,
  setUser,
  setStatus,
  setPriority,
  setDocument,
  clearAllTicketState,
} = ticketSlice.actions;

export default ticketSlice.reducer;
