import React, { useEffect, useState } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { allBrandsThunk, brandAlterThunk, updateBrandAlterThunk } from '@/redux/thunks/brandsThunk';
import Head from 'next/head';
import Select from 'react-select';

const EditBrandsAlter = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [phone, setPhone] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { brands, brandAlter, loading } = useSelector(state => state.brands);

    useEffect(() => {
        dispatch(brandAlterThunk(id));
        dispatch(allBrandsThunk());
    }, []);

    useEffect(() => {
        setNameAR(brandAlter?.name_ar);
        setNameEN(brandAlter?.name_en);
        setBrand({ value: brandAlter?.brand_id, label: brandAlter?.brand?.name_ar });
        setWebsite(brandAlter?.website);
        setFacebook(brandAlter?.facebook);
        setInstagram(brandAlter?.instagram);
        setPhone(brandAlter?.phone);
    }, [brandAlter]);

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
            await dispatch(updateBrandAlterThunk({
                "id": id,
                "payload": {
                    "name_ar": nameAR,
                    "name_en": nameEN,
                    "brand_id": brand?.value,
                    "image": image,
                    "website": website,
                    "facebook": facebook,
                    "instagram": instagram,
                    "phone": phone,
                }
            }));
            router.replace('/admin-panel/alternatives/brands');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Alternatives Brands | Edit</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Edit Alternative Brand</p>
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
                            value={brand}
                            onChange={(selected) => setBrand(selected)}
                            options={brands.map(option => ({ value: option.id, label: option.name_ar }))}
                            isSearchable
                            placeholder="Brand"
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

export default EditBrandsAlter;
