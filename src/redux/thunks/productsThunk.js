import productsServices from "@/services/productsService";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* products */
export const productsThunk = createAsyncThunk(
    "products/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProducts(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const allCProductsThunk = createAsyncThunk(
    "products/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await productsServices.allProducts();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const productThunk = createAsyncThunk(
    "product/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProduct(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createProductThunk = createAsyncThunk(
    "products/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.createProduct(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateProductThunk = createAsyncThunk(
    "products/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.updateProduct(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteProductThunk = createAsyncThunk(
    "products/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.deleteProduct(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const categoryProductsThunk = createAsyncThunk(
    "category/products/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.getCategoryProducts(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);


/* products common names */
export const productsCNThunk = createAsyncThunk(
    "cn/products/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProductsCN(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const allCProductsCNThunk = createAsyncThunk(
    "cn/products/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await productsServices.allProductsCN();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const productCNThunk = createAsyncThunk(
    "cn/product/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProductCN(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createProductCNThunk = createAsyncThunk(
    "cn/products/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.createProductCN(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateProductCNThunk = createAsyncThunk(
    "cn/products/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.updateProductCN(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteProductCNThunk = createAsyncThunk(
    "cn/products/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.deleteProductCN(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

/* products alternatives */
export const productsAlterThunk = createAsyncThunk(
    "alter/products/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProductsAlter(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const allCProductsAlterThunk = createAsyncThunk(
    "alter/products/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await productsServices.allProductsAlter();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const productAlterThunk = createAsyncThunk(
    "alter/product/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.getProductAlter(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createProductAlterThunk = createAsyncThunk(
    "alter/products/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.createProductAlter(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateProductAlterThunk = createAsyncThunk(
    "alter/products/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await productsServices.updateProductAlter(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteProductAlterThunk = createAsyncThunk(
    "alter/products/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.deleteProductAlter(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const recommendedProductsThunk = createAsyncThunk(
    "recommended/products/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await productsServices.recommendedProducts(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
