import { createSlice } from "@reduxjs/toolkit";
import { allCategoriesThunk, categoriesThunk, categoryThunk, createCategoryThunk, deleteCategoryThunk, updateCategoryThunk } from "../thunks/categoriesThunk";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        loading: false,
        categories: [],
        category: {},
    },

    extraReducers: (builder) => {
        builder.addCase(categoriesThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(categoriesThunk.fulfilled, (state, action) => {
            state.categories = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(categoriesThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allCategoriesThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allCategoriesThunk.fulfilled, (state, action) => {
            state.categories = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(allCategoriesThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(categoryThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(categoryThunk.fulfilled, (state, action) => {
            state.category = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(categoryThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createCategoryThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createCategoryThunk.fulfilled, (state, action) => {
            state.category = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(createCategoryThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateCategoryThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateCategoryThunk.fulfilled, (state, action) => {
            state.category = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(updateCategoryThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteCategoryThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
            builder.addCase(deleteCategoryThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default categoriesSlice;
