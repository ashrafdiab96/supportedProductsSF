import { createSlice } from "@reduxjs/toolkit";
import { categoriesThunk } from "../thunks/categoriesThunk";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        loading: false,
        categories: "",
    },

    extraReducers: (builder) => {
            builder.addCase(categoriesThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(categoriesThunk.fulfilled, (state, action) => {
            state.categories = action?.payload?.data;
            console.log('action', action)
            state.loading = false;
        });
            builder.addCase(categoriesThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default categoriesSlice;
