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

export const allCategoriesThunk = createAsyncThunk(
    "categories/all",
    async (_, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.allCategories();
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const categoryThunk = createAsyncThunk(
    "category/info",
    async (id, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.getCategory(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const createCategoryThunk = createAsyncThunk(
    "categories/create",
    async (data, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.createCategory(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const updateCategoryThunk = createAsyncThunk(
    "categories/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.updateCategory(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const deleteCategoryThunk = createAsyncThunk(
    "categories/delete",
    async (id, { rejectWithValue }) => {
        try {
            const res = await categoriesServices.deleteCategory(id);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

