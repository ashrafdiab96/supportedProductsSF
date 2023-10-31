const apiUrls = {
    token: "/connect/token",

    /* categories */
    categories: `/api/category/getPaginate`,
    allCategories: `/api/category/get`,
    createCategory: `/api/category/create`,
    category: (id) => `/api/category/get/${id}`,
    updateCategory: (id) => `/api/category/update/${id}`,
    deleteCategory: (id) => `/api/category/delete/${id}`,

    /* products */
};

export default apiUrls;
