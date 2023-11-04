import { createSlice } from "@reduxjs/toolkit";
import { allCProductsAlterThunk, allCProductsCNThunk, allCProductsThunk, categoryProductsThunk, createProductAlterThunk, createProductCNThunk, createProductThunk, deleteProductAlterThunk, deleteProductCNThunk, deleteProductThunk, productAlterThunk, productCNThunk, productThunk, productsAlterThunk, productsCNThunk, productsThunk, recommendedProductsThunk, updateProductAlterThunk, updateProductCNThunk, updateProductThunk } from "../thunks/productsThunk";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        categoryProducts: [],
        product: {},
        productsCN: [],
        productCN: {},
        productsAlter: [],
        productAlter: {},
        productsRecommended: {},
    },

    extraReducers: (builder) => {
        /* products */
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

        /* products common anmes */
        builder.addCase(productsCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productsCNThunk.fulfilled, (state, action) => {
            state.productsCN = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(productsCNThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allCProductsCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allCProductsCNThunk.fulfilled, (state, action) => {
            state.productsCN = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(allCProductsCNThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(productCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productCNThunk.fulfilled, (state, action) => {
            state.productCN = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(productCNThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createProductCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createProductCNThunk.fulfilled, (state, action) => {
            state.productCN = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(createProductCNThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateProductCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateProductCNThunk.fulfilled, (state, action) => {
            state.productCN = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(updateProductCNThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteProductCNThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteProductCNThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(deleteProductCNThunk.rejected, (state) => {
            state.loading = false;
        });

        /* products alternatives */
        builder.addCase(productsAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productsAlterThunk.fulfilled, (state, action) => {
            state.productsAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(productsAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(allCProductsAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(allCProductsAlterThunk.fulfilled, (state, action) => {
            state.productsAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(allCProductsAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(productAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(productAlterThunk.fulfilled, (state, action) => {
            state.productAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(productAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(createProductAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createProductAlterThunk.fulfilled, (state, action) => {
            state.productAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(createProductAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(updateProductAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateProductAlterThunk.fulfilled, (state, action) => {
            state.productAlter = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(updateProductAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteProductAlterThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteProductAlterThunk.fulfilled, (state, action) => {
            state.loading = false;
        });
        builder.addCase(deleteProductAlterThunk.rejected, (state) => {
            state.loading = false;
        });

        /* products recommended */
        builder.addCase(recommendedProductsThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(recommendedProductsThunk.fulfilled, (state, action) => {
            state.productsRecommended = action?.payload?.data;
            state.loading = false;
        });
        builder.addCase(recommendedProductsThunk.rejected, (state) => {
            state.loading = false;
        });
        
    },
});

export default productsSlice;
