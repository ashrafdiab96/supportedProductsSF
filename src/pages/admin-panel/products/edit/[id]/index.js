import React, { useState, useEffect } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CircularProgress } from '@mui/material';
import { productThunk, updateProductThunk } from '@/redux/thunks/productsThunk';
import { allCategoriesThunk } from '@/redux/thunks/categoriesThunk';

const EditProduct = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [supportEnemy, setSupportEnemy] = useState('');
    const [localProduct, setLocalProduct] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { product } = useSelector(state => state.products);

    const { loading } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(productThunk(id));
        dispatch(allCategoriesThunk());
    }, []);

    useEffect(() => {
        setNameAR(product?.name_ar);
        setNameEN(product?.name_en);
        setCategory(product?.category);
        setSupportEnemy(product?.support_enemy);
        setLocalProduct(product?.local_product);
    }, [product]);

    const validate = () => {
        setNameARValid(nameAR == '' ? false : true);
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const save = async () => {
        validate();
        if (nameARValid) {
            await dispatch(updateProductThunk({
                "id": id,
                "payload": {
                    "name_ar": nameAR,
                    "name_en": nameEN,
                    "category": category,
                    "image": image,
                    "support_enemy": supportEnemy,
                    "local_product": localProduct,
                }
            }));
            router.replace('/admin-panel/products');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Products | Edit</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Product</p>
                    <div className={styles.inpDiv}>
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
                            onChange={e => setCategory(e.target.value)}
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
                        <input
                            className={styles.file}
                            type='file'
                            onChange={handleImage}
                        />
                        <select
                            className={styles.sel}
                            value={supportEnemy}
                            onChange={e => setSupportEnemy(e.target.value)}
                        >
                            <option value='' selected disabled>Support Enemy</option>
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                        <select
                            className={styles.sel}
                            value={localProduct}
                            onChange={e => setLocalProduct(e.target.value)}
                        >
                            <option value='' selected disabled>Local Product</option>
                            <option value={1}>Yes</option>
                            <option value={0}>No</option>
                        </select>
                    </div>
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

export default EditProduct;
