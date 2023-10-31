import apiUrls from "@/helpers/api";
import axios from "axios";

const categoriesServices = {
    getCategories: (page) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.categories}?page=${page}`, 
        );
    },

};

export default categoriesServices;
