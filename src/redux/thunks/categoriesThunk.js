import categoriesServices from "@/services/categoriesServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const categoriesThunk = createAsyncThunk(
    "categories/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.getCategories(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

