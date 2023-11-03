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
    products: `/api/product/getPaginate`,
    allProducts: `/api/product/get`,
    createProduct: `/api/product/create`,
    product: (id) => `/api/product/get/${id}`,
    updateProduct: (id) => `/api/product/update/${id}`,
    deleteProduct: (id) => `/api/product/delete/${id}`,
    categoryProducts: (id) => `/api/product/category-products/${id}`,
};

export default apiUrls;
