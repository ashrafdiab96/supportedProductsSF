import { createSlice } from "@reduxjs/toolkit";
import {
  catalogThunk,
  catalogsThunk,
  catalogCategoriesThunk,
  categoryThunk,
  createCatalogThunk,
  createCategoryThunk, imageCategoriesThunk, deleteCatalogThunk, deleteCategoryThunk,
  getNewProductThunk,
  uploadCatalogImagesThunk,
  propetiesDictionaryThunk,
  getProductVariationsThunk,
  getNewVariationThunk,
  createProductThunk,
  addPriceThunk,
  getPricesWidgetThunk,
  saveProductFullfillmentThunk,
  getProductFullfillmentThunk,
  getVariationFullfillmentThunk,
  allCategoriesThunk,
  getCategoriesWithSubsThunk,
} from "../thunks/catalogThunk";

const catalogSlice = createSlice({
  name: "catalogs",
  initialState: {
    loading: false,
    catalogs: "",
    catalog: "",
    categories: "",
    allCategories: [],
    category: {},
    images: [],
    newProductSku: "",
    imageCategories: [],
    propetiesDictionary:[],
    variations: [],
    newVariations: [],
    product: {},
    price: [],
    prices: [],
    fullfillment: {},
    fullfillments: [],
    varFullfillments: [],
    categoriesWithSubs: [],
  },

  extraReducers: (builder) => {
    builder.addCase(catalogsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(catalogsThunk.fulfilled, (state, action) => {
      state.catalogs = action?.payload?.data;
      state.loading = false;
    });
    builder.addCase(catalogsThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(addPriceThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(addPriceThunk.fulfilled, (state, action) => {
        state.price = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(addPriceThunk.rejected, (state) => {
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

    builder.addCase(getPricesWidgetThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getPricesWidgetThunk.fulfilled, (state, action) => {
        state.prices = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(getPricesWidgetThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(catalogThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(catalogThunk.fulfilled, (state, action) => {
      state.catalog = action?.payload?.data;
      state.loading = false;
    });
    builder.addCase(catalogThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(propetiesDictionaryThunk.fulfilled, (state, action) => {
      state.propetiesDictionary = action?.payload?.data?.results;
    });


    builder.addCase(createCatalogThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCatalogThunk.fulfilled, (state, action) => {
      state.catalog = action?.payload?.data;
      state.loading = false;
    });
    builder.addCase(createCatalogThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(catalogCategoriesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(catalogCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action?.payload?.data;
      state.loading = false;
    });
    builder.addCase(catalogCategoriesThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(categoryThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(categoryThunk.fulfilled, (state, action) => {
      state.category = action?.payload?.data;
      state.loading = true;
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
    builder.addCase(getNewProductThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewProductThunk.fulfilled, (state, action) => {
      state.newProductSku = action?.payload?.data;
      state.loading = false;
    });
    builder.addCase(getNewProductThunk.rejected, (state) => {
      state.loading = false;
    });

    /* Upload Images Thunk  */
    builder.addCase(uploadCatalogImagesThunk.pending, state => {
        state.loading = true;
    });
    builder.addCase(uploadCatalogImagesThunk.fulfilled, (state, action) => {
        state.images = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(uploadCatalogImagesThunk.rejected, state => {
        state.loading = false;
    });

    /* Images Categories Thunk  */
    builder.addCase(imageCategoriesThunk.pending, state => {
        state.loading = true;
    });
    builder.addCase(imageCategoriesThunk.fulfilled, (state, action) => {
        state.imageCategories = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(imageCategoriesThunk.rejected, state => {
        state.loading = false;
    });

    /* Product Variations Thunk  */
    builder.addCase(getProductVariationsThunk.pending, state => {
        state.loading = true;
    });
    builder.addCase(getProductVariationsThunk.fulfilled, (state, action) => {
        state.variations = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(getProductVariationsThunk.rejected, state => {
        state.loading = false;
    });

    builder.addCase(getNewVariationThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getNewVariationThunk.fulfilled, (state, action) => {
        state.newVariations = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(getNewVariationThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(saveProductFullfillmentThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(saveProductFullfillmentThunk.fulfilled, (state, action) => {
        state.fullfillment = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(saveProductFullfillmentThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(getProductFullfillmentThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getProductFullfillmentThunk.fulfilled, (state, action) => {
        state.fullfillments = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(getProductFullfillmentThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(getVariationFullfillmentThunk.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(getVariationFullfillmentThunk.fulfilled, (state, action) => {
        state.varFullfillments = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(getVariationFullfillmentThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(allCategoriesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allCategoriesThunk.fulfilled, (state, action) => {
        state.allCategories = action?.payload?.data;
        state.loading = false;
    });
    builder.addCase(allCategoriesThunk.rejected, (state) => {
        state.loading = false;
    });

    builder.addCase(getCategoriesWithSubsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoriesWithSubsThunk.fulfilled, (state, action) => {
        state.categoriesWithSubs = action?.payload?.data;
        console.log(action);
        state.loading = false;
    });
    builder.addCase(getCategoriesWithSubsThunk.rejected, (state) => {
        state.loading = false;
    });
    

  },
});

export default catalogSlice;
