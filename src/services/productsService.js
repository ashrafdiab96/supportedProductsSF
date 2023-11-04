import apiUrls from "@/helpers/api";
import axios from "axios";

const productsServices = {
    /* products */
    getProducts: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.products}?page=${page}`, 
        );
    },

    allProducts: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allProducts}`, 
        );
    },

    getProduct: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.product(id)}`, 
        );
    },

    createProduct: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createProduct}`,
            data,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    updateProduct: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateProduct(data?.id)}`,
            data?.payload,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    deleteProduct: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteProduct(id)}`, 
        );
    },

    getCategoryProducts: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.categoryProducts(id)}`, 
        );
    },

    /* products common names */
    getProductsCN: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productsCN}?page=${page}`, 
        );
    },

    allProductsCN: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allProductsCN}`, 
        );
    },

    getProductCN: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productCN(id)}`, 
        );
    },

    createProductCN: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createProductCN}`,
            data,
        );
    },

    updateProductCN: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateProductCN(data?.id)}`,
            data?.payload,
        );
    },

    deleteProductCN: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteProductCN(id)}`, 
        );
    },

    /* products alternatives */
    getProductsAlter: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productsAlter}?page=${page}`, 
        );
    },

    allProductsAlter: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allProductsAlter}`, 
        );
    },

    getProductAlter: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.productAlter(id)}`,
        );
    },

    createProductAlter: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createProductAlter}`,
            data,
        );
    },

    updateProductAlter: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateProductAlter(data?.id)}`,
            data?.payload,
        );
    },

    deleteProductAlter: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteProductAlter(id)}`, 
        );
    },

    recommendedProducts: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.recommendedProducts}`, 
        );
    },

};

export default productsServices;
