import { createSlice } from "@reduxjs/toolkit";
import { allCProductsThunk, categoryProductsThunk, createProductThunk, deleteProductThunk, productThunk, productsThunk, updateProductThunk } from "../thunks/productsThunk";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        categoryProducts: [],
        product: {},
    },

    extraReducers: (builder) => {
        builder.addCase(productsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productsThunk.fulfilled, (state, action) => {
            state.products = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(productsThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allCProductsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allCProductsThunk.fulfilled, (state, action) => {
            state.products = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(allCProductsThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(productThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productThunk.fulfilled, (state, action) => {
            state.product = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(productThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createProductThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createProductThunk.fulfilled, (state, action) => {
            state.product = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(createProductThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateProductThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateProductThunk.fulfilled, (state, action) => {
            state.product = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(updateProductThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteProductThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
            builder.addCase(deleteProductThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(categoryProductsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(categoryProductsThunk.fulfilled, (state, action) => {
            state.categoryProducts = action?.payload?.data;
            state.loading = false;
        });
            builder.addCase(categoryProductsThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default productsSlice;
