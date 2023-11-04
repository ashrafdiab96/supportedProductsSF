import brandsServices from "@/services/brandsService";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* brands */
export const brandsThunk = createAsyncThunk(
    "brands/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await brandsServices.getBrands(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const allBrandsThunk = createAsyncThunk(
    "brands/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await brandsServices.allBrands();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const brandThunk = createAsyncThunk(
    "brand/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await brandsServices.getBrand(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createBrandThunk = createAsyncThunk(
    "brands/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await brandsServices.createBrand(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateBrandThunk = createAsyncThunk(
    "brands/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await brandsServices.updateBrand(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteBrandThunk = createAsyncThunk(
    "brands/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await brandsServices.deleteBrand(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

/* brands alternatives */
export const brandsAlterThunk = createAsyncThunk(
    "alter/brands/info",
    async (page, { rejectWithValue }) => {
        try {
            const res = await brandsServices.getBrandsAlter(page);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const allBrandAlterThunk = createAsyncThunk(
    "alter/brands/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await brandsServices.allBrandsAlter();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const brandAlterThunk = createAsyncThunk(
    "alter/brand/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await brandsServices.getBrandAlter(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createBrandAlterThunk = createAsyncThunk(
    "alter/brands/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await brandsServices.createBrandAlter(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateBrandAlterThunk = createAsyncThunk(
    "alter/brands/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await brandsServices.updateBrandAlter(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteBrandAlterThunk = createAsyncThunk(
    "alter/brands/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await brandsServices.deleteBrandAlter(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
