import apiUrls from "@/helpers/api";
import axios from "axios";

const productsServices = {
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

};

export default productsServices;
