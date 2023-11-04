import React, { useEffect, useState } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import Head from 'next/head';
import { brandThunk, updateBrandThunk } from '@/redux/thunks/brandsThunk';

const EditBrands = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [image, setImage] = useState('');
    const [supportEnemy, setSupportEnemy] = useState('');
    const [localProduct, setLocalProduct] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { brand, loading } = useSelector(state => state.brands);

    useEffect(() => {
        dispatch(brandThunk(id));
    }, []);
    
    useEffect(() => {
        setNameAR(brand?.name_ar);
        setNameEN(brand?.name_en);
        setSupportEnemy(brand?.support_enemy);
        setLocalProduct(brand?.local_brand);
    }, [brand]);

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
            await dispatch(updateBrandThunk({
                "id": id,
                "payload": {
                    "name_ar": nameAR,
                    "name_en": nameEN,
                    "image": image,
                    "support_enemy": supportEnemy,
                    "local_product": localProduct,
                }
            }));
            router.replace('/admin-panel/brands');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Brands | Edit</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Edit Brands</p>
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

export default EditBrands;
