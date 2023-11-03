import productsServices from "@/services/productsService";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

