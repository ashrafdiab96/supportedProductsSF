import React, { useEffect, useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { categoryProductsThunk, createProductAlterThunk } from '@/redux/thunks/productsThunk';
import { allCategoriesThunk } from '@/redux/thunks/categoriesThunk';
import Head from 'next/head';
import Select from 'react-select';

const AddProductsAlter = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [image, setImage] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [phone, setPhone] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { loading, categoryProducts } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(allCategoriesThunk());
    }, []);

    const validate = () => {
        setNameARValid(nameAR == '' ? false : true);
    }

    const handleCategoryChange = (selected) => {
        setCategory(selected);
        dispatch(categoryProductsThunk(selected.value));
    };

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
            await dispatch(createProductAlterThunk({
                "name_ar": nameAR,
                "name_en": nameEN,
                "category_id": category?.value,
                "product_id": product?.value,
                "image": image,
                "website": website,
                "facebook": facebook,
                "instagram": instagram,
                "phone": phone,
            }));
            router.replace('/admin-panel/alternatives/products');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Alternatives Products | Create</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Alternative Product</p>
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
                        <Select
                            className={styles.sel}
                            value={category}
                            onChange={handleCategoryChange}
                            options={categories.map(option => ({ value: option.id, label: option.name_ar }))}
                            isSearchable
                            placeholder="Category"
                        />
                        <Select
                            className={styles.sel}
                            value={product}
                            onChange={(selected) => setProduct(selected)}
                            options={categoryProducts.map(option => ({ value: option.id, label: option.name_ar }))}
                            isSearchable
                            placeholder="Product"
                        />
                        <input
                            className={styles.file}
                            type='file'
                            onChange={handleImage}
                        />
                        <input
                            className={[styles.inp, nameARValid ? '' : 'inpError'].join(' ')}
                            type='text'
                            placeholder='Website'
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                        />
                        <input
                            className={styles.inp}
                            type='text'
                            placeholder='Facebook'
                            value={facebook}
                            onChange={e => setFacebook(e.target.value)}
                        />
                        <input
                            className={[styles.inp, nameARValid ? '' : 'inpError'].join(' ')}
                            type='text'
                            placeholder='Instagram'
                            value={instagram}
                            onChange={e => setInstagram(e.target.value)}
                        />
                        <input
                            className={styles.inp}
                            type='text'
                            placeholder='Phone'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
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

export default AddProductsAlter;
