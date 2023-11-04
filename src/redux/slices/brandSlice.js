import { createSlice } from "@reduxjs/toolkit";
import { allBrandAlterThunk, allBrandsThunk, brandAlterThunk, brandThunk, brandsAlterThunk, brandsThunk, createBrandAlterThunk, createBrandThunk, deleteBrandAlterThunk, deleteBrandThunk, updateBrandAlterThunk, updateBrandThunk } from "../thunks/brandsThunk";

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        loading: false,
        brands: [],
        brand: {},
        brandsAlter: [],
        brandAlter: {},
    },

    extraReducers: (builder) => {
        /* brands */
        builder.addCase(brandsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(brandsThunk.fulfilled, (state, action) => {
            state.brands = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(brandsThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allBrandsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allBrandsThunk.fulfilled, (state, action) => {
            state.brands = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(allBrandsThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(brandThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(brandThunk.fulfilled, (state, action) => {
            state.brand = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(brandThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createBrandThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createBrandThunk.fulfilled, (state, action) => {
            state.brand = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(createBrandThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateBrandThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateBrandThunk.fulfilled, (state, action) => {
            state.brand = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(updateBrandThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteBrandThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteBrandThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(deleteBrandThunk.rejected, (state) => {
            state.loading = false;
        });

        /* brands alternatives */
        builder.addCase(brandsAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(brandsAlterThunk.fulfilled, (state, action) => {
            state.brandsAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(brandsAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allBrandAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allBrandAlterThunk.fulfilled, (state, action) => {
            state.brandsAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(allBrandAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(brandAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(brandAlterThunk.fulfilled, (state, action) => {
            state.brandAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(brandAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createBrandAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createBrandAlterThunk.fulfilled, (state, action) => {
            state.brandAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(createBrandAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateBrandAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateBrandAlterThunk.fulfilled, (state, action) => {
            state.brandAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(updateBrandAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteBrandAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteBrandAlterThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(deleteBrandAlterThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default brandsSlice;
