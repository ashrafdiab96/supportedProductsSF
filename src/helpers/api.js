const apiUrls = {

    /* ============================================================== */
    /*                           Admin URLS                           */
    /* ============================================================== */

    /* login */
    token: "/api/login",
    logout: "/api/logout",

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

    /* products common names */
    productsCN: `/api/product-names/getPaginate`,
    allProductsCN: `/api/product-names/get`,
    createProductCN: `/api/product-names/create`,
    productCN: (id) => `/api/product-names/get/${id}`,
    updateProductCN: (id) => `/api/product-names/update/${id}`,
    deleteProductCN: (id) => `/api/product-names/delete/${id}`,

    /* products alternatives */
    productsAlter: `/api/alternative/getPaginate`,
    allProductsAlter: `/api/alternative/get`,
    createProductAlter: `/api/alternative/create`,
    productAlter: (id) => `/api/alternative/get/${id}`,
    updateProductAlter: (id) => `/api/alternative/update/${id}`,
    deleteProductAlter: (id) => `/api/alternative/delete/${id}`,

    /* brands */
    brands: `/api/brand/getPaginate`,
    allBrands: `/api/brand/get`,
    createBrand: `/api/brand/create`,
    brand: (id) => `/api/brand/get/${id}`,
    updateBrand: (id) => `/api/brand/update/${id}`,
    deleteBrand: (id) => `/api/brand/delete/${id}`,
    
    /* brands alternatives */
    brandsAlter: `/api/brand-alternative/getPaginate`,
    allBrandsAlter: `/api/brand-alternative/get`,
    createBrandAlter: `/api/brand-alternative/create`,
    brandAlter: (id) => `/api/brand-alternative/get/${id}`,
    updateBrandAlter: (id) => `/api/brand-alternative/update/${id}`,
    deleteBrandAlter: (id) => `/api/brand-alternative/delete/${id}`,

    /* products recommended */
    recommendedProducts: `/api/recommended-products/getPaginate`,

    /* ============================================================== */
    /*                          Client URLS                           */
    /* ============================================================== */

};

export default apiUrls;
