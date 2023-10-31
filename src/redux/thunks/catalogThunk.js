import catalogServices from "@/services/catalogServices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const catalogsThunk = createAsyncThunk(
  "catalogs/info",
  async (paginationSettings, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getCatalogs(paginationSettings);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const catalogThunk = createAsyncThunk(
  "catalogs/catalog/info",
  async (id, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getCatalog(id);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const propetiesDictionaryThunk = createAsyncThunk(
  "catalogs/catalog/propetiesDictionary",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getPropertiesDictionary(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createCatalogThunk = createAsyncThunk(
  "catalogs/catalog/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.createCatalog(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const catalogCategoriesThunk = createAsyncThunk(
  "catalogs/catalogCategories/info",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getCatalogCategories(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const allCategoriesThunk = createAsyncThunk(
  "allCategories/info",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getCategories(data);
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
      const res = await catalogServices.getCategory(id);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createCategoryThunk = createAsyncThunk(
  "catalogs/category/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.createCategory(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const imageCategoriesThunk = createAsyncThunk(
  "catalogs/category/imagesCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await catalogServices.imageCategories();
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const deleteCatalogThunk = createAsyncThunk(
  "catalogs/catalog/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await catalogServices.deleteCatalog(id);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk(
  "catalogs/category/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await catalogServices.deleteCategory(id);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getNewProductThunk = createAsyncThunk(
  "catalogs/product/getNew",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getNewProduct(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createProductThunk = createAsyncThunk(
  "catalogs/product/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.createProduct(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addPriceThunk = createAsyncThunk(
  "catalogs/product/price/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.addPrice(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const getPricesWidgetThunk = createAsyncThunk(
  "catalogs/product/prices/info",
  async (data, { rejectWithValue }) => {
    try {
      const res = await catalogServices.getPricesWidget(data);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const saveProductFullfillmentThunk = createAsyncThunk(
    "catalogs/product/fullfillment/save",
    async (data, { rejectWithValue }) => {
      try {
        const res = await catalogServices.saveProductFullfillment(data);
        return res;
      } catch (err) {
        rejectWithValue(err);
      }
    }
  );

  export const getProductFullfillmentThunk = createAsyncThunk(
    "catalogs/product/fullfillment/get",
    async (data, { rejectWithValue }) => {
      try {
        const res = await catalogServices.getProductFullfillment(data);
        return res;
      } catch (err) {
        rejectWithValue(err);
      }
    }
  );

  export const getVariationFullfillmentThunk = createAsyncThunk(
    "catalogs/product/variation/fullfillment/get",
    async (data, { rejectWithValue }) => {
      try {
        const res = await catalogServices.getVariationFullfillment(data);
        return res;
      } catch (err) {
        rejectWithValue(err);
      }
    }
  );

export const uploadCatalogImagesThunk = createAsyncThunk(
  "upload/images/info",
  async (data, { rejectWithValue }) => {
      try {
          const res = await catalogServices.uploadImages(data);
          return res;
      } catch (err) {
          return rejectWithValue(err);
      }
  },
);

export const getProductVariationsThunk = createAsyncThunk(
    "proguct/variations/info",
    async (data, { rejectWithValue }) => {
        try {
            const res = await catalogServices.getProductsVariations(data);
            return res;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
  );

export const getNewVariationThunk = createAsyncThunk(
    "catalogs/product/variation/getNew",
    async (data, { rejectWithValue }) => {
        try {
            const res = await catalogServices.getNewVariation(data);
            return res;
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

export const getCategoriesWithSubsThunk = createAsyncThunk(
  "categories/subs/info",
  async (data, { rejectWithValue }) => {
      try {
          const res = await catalogServices.getCategoriesWithSubs(data);
          return res;
      } catch (err) {
          rejectWithValue(err);
      }
  }
);
