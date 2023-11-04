import React, { useEffect, useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import Head from 'next/head';
import Select from 'react-select';
import { allBrandsThunk, createBrandAlterThunk } from '@/redux/thunks/brandsThunk';

const AddBrandsAlter = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [phone, setPhone] = useState('');
    const [nameARValid, setNameARValid] = useState(true);

    const { loading, brands } = useSelector(state => state.brands);

    useEffect(() => {
        dispatch(allBrandsThunk());
    }, []);

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
            await dispatch(createBrandAlterThunk({
                "name_ar": nameAR,
                "name_en": nameEN,
                "brand_id": brand?.value,
                "image": image,
                "website": website,
                "facebook": facebook,
                "instagram": instagram,
                "phone": phone,
            }));
            // router.replace('/admin-panel/alternatives/brands');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Alternatives Brands | Create</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Alternative Brand</p>
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

export default AddBrandsAlter;
