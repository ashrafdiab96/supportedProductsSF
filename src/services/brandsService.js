import apiUrls from "@/helpers/api";
import axios from "axios";

const brandsServices = {
    /* brands */
    getBrands: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.brands}?page=${page}`, 
        );
    },

    allBrands: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allBrands}`, 
        );
    },

    getBrand: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.brand(id)}`, 
        );
    },

    createBrand: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createBrand}`,
            data,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    updateBrand: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateBrand(data?.id)}`,
            data?.payload,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    deleteBrand: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteBrand(id)}`, 
        );
    },

    /* brands alternatives */
    getBrandsAlter: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.brandsAlter}?page=${page}`, 
        );
    },

    allBrandsAlter: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allBrandsAlter}`, 
        );
    },

    getBrandAlter: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.brandAlter(id)}`,
        );
    },

    createBrandAlter: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createBrandAlter}`,
            data,
        );
    },

    updateBrandAlter: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateBrandAlter(data?.id)}`,
            data?.payload,
        );
    },

    deleteBrandAlter: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteBrandAlter(id)}`, 
        );
    },

};

export default brandsServices;
