import authServices from "@/services/authServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authServices.login(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (data, { rejectWithValue }) => {
    try {
      const res = await authServices.refresh(data);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
