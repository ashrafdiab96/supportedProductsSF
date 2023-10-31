import React, { useState, useEffect } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { categoryThunk, updateCategoryThunk } from '@/redux/thunks/categoriesThunk';

const EditCategory = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { category } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(categoryThunk(id));
    }, []);

    useEffect(() => {
        setNameAR(category?.name_ar);
        setNameEN(category?.name_en);
    }, [category]);

    const validate = () => {
        setNameARValid(nameAR == '' ? false : true);
    }

    const save = async () => {
        validate();
        if (nameARValid) {
            await dispatch(updateCategoryThunk({
                "id": id,
                "payload": {
                    "name_ar": nameAR,
                    "name_en": nameEN,
                },
            }));
            router.replace('/admin-panel/categories');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <div className={styles.form}>
                    <p className={styles.title}>Edit Category</p>
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
                    >Submit</button>
                </div>
            </div>
        </AdminLayout>
    );
}

export default EditCategory;
