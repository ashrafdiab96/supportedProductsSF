import React, { useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { createCategoryThunk } from '@/redux/thunks/categoriesThunk';

const AddCategory = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

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
                    >Submit</button>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AddCategory;
