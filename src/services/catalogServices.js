import apiUrls from "@/helpers/api";
import axios from "axios";

const catalogServices = {
  getCatalogs: (paginationSettings) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.catalogs}`, 
      paginationSettings
    );
  },

  getCatalog: (id) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.catalog}/${id}`
    );
  },

  createCatalog: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.catalog}`,
      data
    );
  },

  getCatalogCategories: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.catalogCatwegories}`,
      data
    );
  },

  getCategory: (categoryId) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.category}/${categoryId}`
    );
  },

  createCategory: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.category}`,
      data
    );
  },

  imageCategories: () => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.imageCategories}`
    );
  },

  deleteCatalog: (id) => {
    return axios.delete(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.catalog}/${id}`
    );
  },

  deleteCategory: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteCatalogCategory}`,
      data
    );
  },

  getNewProduct: (data) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.getNewProduct(data)}`
    );
  },

  addPrice: (data) => {
    return axios.put(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.addPrice(data?.productId)}`,
      data,
      {
        "Content-Type": "application/json;charset=UTF-8"
      }
    );
  },

  getPricesWidget: (data) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.getPricesWidget(data?.productId, data?.catalogId)}`,
    );
  },

  saveProductFullfillment: (data) => {
    return axios.put(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productFullfillment(data?.productId)}`,
      data,
      { headers: { "Content-Type": "application/json;charset=UTF-8" } }
    );
  },

  getProductFullfillment: (data) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productFullfillment(data?.productId)}`,
    );
  },

  getVariationFullfillment: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.variationFullfillment}`,
      data,
    );
  },

  createProduct: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + apiUrls.createProduct,
      data
    );
  },

  uploadImages: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL +
        `${apiUrls.images}?folderUrl=catalog/${data?.catalogId}/${data?.code}`,
      { file: data.file },
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  },
  getPropertiesDictionary: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + apiUrls.propertiesDictionary,
      data
    );
  },
  
  getProductsVariations: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + apiUrls.variations,
      data
    );
  },

  getNewVariation: (data) => {
    return axios.get(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.getNewVariation(data)}`
    );
  },

  getCategories: (data) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.searchCategories}`,
      data
    );
  },

  getCategoriesWithSubs: (catalogId) => {
    return axios.post(
      process.env.NEXT_PUBLIC_API_URL + `${apiUrls.categoriesWithSubs}?CatalogId=${catalogId}`,
    );
  },

};

export default catalogServices;
