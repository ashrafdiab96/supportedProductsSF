import React, { useState, useEffect } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import Head from 'next/head';
import { allCategoriesThunk } from '@/redux/thunks/categoriesThunk';
import { categoryProductsThunk, createProductCNThunk, productCNThunk } from '@/redux/thunks/productsThunk';

const EditProductName = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { categories } = useSelector(state => state.categories);
    const { productCN, categoryProducts, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(productCNThunk(id));
        dispatch(allCategoriesThunk());
    }, []);

    useEffect(() => {
        dispatch(categoryProductsThunk(productCN?.category_id));
        setNameAR(productCN?.name_ar);
        setNameEN(productCN?.name_en);
        setCategory(productCN?.category_id);
        setProduct(productCN?.product_id);
    }, [productCN]);

    const validate = () => {
        setNameARValid(nameAR == '' ? false : true);
    }

    const handleCategoryCange = (e) => {
        setCategory(e.target.value);
        dispatch(categoryProductsThunk(e.target.value));
    };

    const save = async () => {
        validate();
        if (nameARValid) {
            await dispatch(createProductCNThunk({
                "name_ar": nameAR,
                "name_en": nameEN,
                "category_id": category,
                "product_id": product,
            }));
            router.replace('/admin-panel/common-names/products');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Products Common Names | Add</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Product Name</p>
                    <input
                        className={[styles.inp, nameARValid ? '' : 'inpError'].join(' ')}
                        type='text'
                        placeholder='Name (AR)'
                        value={nameAR}
                        onChange={e => setNameAR(e.target.value)}
                    />
                    <input
                        className={styles.inp}
                        type='text'
                        placeholder='Name (EN)'
                        value={nameEN}
                        onChange={e => setNameEN(e.target.value)}
                    />
                    <select
                        className={styles.sel}
                        value={category}
                        onChange={handleCategoryCange}
                    >
                        <option value='' selected disabled>Category</option>
                        {categories?.length ? (
                            categories?.map((item, index) => {
                                return (
                                    <option key={index} value={item?.id}>{item?.name_ar}</option>
                                );
                            })
                        ) : null}
                    </select>
                    <select
                        className={styles.sel}
                        value={product}
                        onChange={e => setProduct(e.target.value)}
                    >
                        <option value='' selected disabled>Product</option>
                        {categoryProducts?.length ? (
                            categoryProducts?.map((item, index) => {
                                return (
                                    <option key={index} value={item?.id}>{item?.name_ar}</option>
                                );
                            })
                        ) : null}
                    </select>
                    <button
                        className={styles.btn}
                        onClick={save}
                    >
                        {loading ? (<CircularProgress />) : 'Submit'}</button>
                </div>
            </div>
        </AdminLayout>
    );
}

export default EditProductName;
