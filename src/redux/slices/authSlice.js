import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshThunk } from "../thunks/authThunks";
import moment from "moment/moment";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    access_token: "",
    token_type: "",
    refresh_token: "",
    expires_in: 0,
  },
  reducers:{
    logout:(state)=>{
      state.loading = false;
      state.access_token = "";
      state.token_type = "";
      state.refresh_token = "";
      state.expires_in = 0;   
     }
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.access_token = action.payload.data.access_token;
      state.token_type = action.payload.data.token_type;
      state.refresh_token = action.payload.data.refresh_token;
      state.expires_in = moment().add(action.payload.data.expires_in,"seconds") ;
      state.loading = false;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(refreshThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshThunk.fulfilled, (state, action) => {
      state.access_token = action.payload.data.access_token;
      state.token_type = action.payload.data.token_type;
      state.refresh_token = action.payload.data.refresh_token;
      state.expires_in = moment().add(action.payload.data.expires_in,"seconds") ;
      state.loading = false;
    });
    builder.addCase(refreshThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default authSlice;
