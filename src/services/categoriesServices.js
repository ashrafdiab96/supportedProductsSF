import apiUrls from "@/helpers/api";
import axios from "axios";

const categoriesServices = {
    getCategories: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.categories}?page=${page}`, 
        );
    },

    allCategories: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.allCategories}`, 
        );
    },

    getCategory: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.category(id)}`, 
        );
    },

    createCategory: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.createCategory}`,
            data 
        );
    },

    updateCategory: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.updateCategory(data?.id)}`,
            data?.payload
        );
    },

    deleteCategory: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.deleteCategory(id)}`, 
        );
    },

};

export default categoriesServices;
