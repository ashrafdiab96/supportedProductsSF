import React, { useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { createCategoryThunk } from '@/redux/thunks/categoriesThunk';
import { CircularProgress } from '@mui/material';
import Head from 'next/head';

const AddCategory = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { loading } = useSelector(state => state.categories);

    const validate = () => {
        setNameARValid(nameAR == '' ? false : true);
    }

    const save = async () => {
        validate();
        if (nameARValid) {
            await dispatch(createCategoryThunk({
                "name_ar": nameAR,
                "name_en": nameEN,
            }));
            router.replace('/admin-panel/categories');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Categories | Add</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Category</p>
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

export default AddCategory;
