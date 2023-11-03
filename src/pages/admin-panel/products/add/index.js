import React, { useEffect, useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { categoryProductsThunk, createProductThunk } from '@/redux/thunks/productsThunk';
import { allCategoriesThunk } from '@/redux/thunks/categoriesThunk';
import Head from 'next/head';

const AddProducts = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [nameAR, setNameAR] = useState('');
    const [nameEN, setNameEN] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [supportEnemy, setSupportEnemy] = useState('');
    const [localProduct, setLocalProduct] = useState('');
    const [namesArr, setNamesArr] = useState([{ name_ar: '', name_en: '' }]);
    const [alternativesArr, setAlternativesArr] = useState([{
        name_ar: '',
        name_en: '',
        image_alter: '',
        website: '',
        facebook: '',
        instagram: '',
        phone: '',
    }]);
    const [nameARValid, setNameARValid] = useState(true);

    const { loading, categoryProducts } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(allCategoriesThunk());
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

    const handleNameArChange = (e, index) => {
        const newArray = [...namesArr];
        newArray[index].name_ar = e.target.value;
        setNamesArr(newArray);
    };

    const handleNameEnChange = (e, index) => {
        const newArray = [...namesArr];
        newArray[index].name_en = e.target.value;
        setNamesArr(newArray);
    };

    const handleAddInput = () => {
        setNamesArr([...namesArr, { name_ar: '', name_en: '' }]);
    }

    const handleRemoveInput = (index) => {
        if (namesArr?.length == 1) return;
        const newArray = [...namesArr];
        newArray.splice(index, 1);
        setNamesArr(newArray);
    };

    const handleAlterAddInput = () => {
        setAlternativesArr([...alternativesArr, {
            name_ar: '',
            name_en: '',
            image_alter: '',
            website: '',
            facebook: '',
            instagram: '',
            phone: '',
        }]);
    };

    const handleAlterRemoveInput = (index) => {
        if (alternativesArr?.length == 1) return;
        const newArray = [...alternativesArr];
        newArray.splice(index, 1);
        setAlternativesArr(newArray);
    };

    const handleAlterNameArChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].name_ar = e.target.value;
        setAlternativesArr(newArray);
    };

    const handleAlterNameEnChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].name_en = e.target.value;
        setAlternativesArr(newArray);
    };

    const handleAlterImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newArray = [...alternativesArr];
                newArray[index].image_alter = e.target.result;
                setAlternativesArr(newArray);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAlterWebsiteChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].website = e.target.value;
        setAlternativesArr(newArray);
    };

    const handleAlterFacebookChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].facebook = e.target.value;
        setAlternativesArr(newArray);
    };

    const handleAlterInstagramChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].instagram = e.target.value;
        setAlternativesArr(newArray);
    };

    const handleAlterPhoneChange = (e, index) => {
        const newArray = [...alternativesArr];
        newArray[index].phone = e.target.value;
        setAlternativesArr(newArray);
    };

    useEffect(() => {console.log(alternativesArr)}, [alternativesArr])

    const save = async () => {
        validate();
        if (nameARValid) {
            console.log(alternativesArr)
            await dispatch(createProductThunk({
                "name_ar": nameAR,
                "name_en": nameEN,
                "category": category,
                "image": image,
                "support_enemy": supportEnemy,
                "local_product": localProduct,
                "names": namesArr,
                "alternatives": alternativesArr,
            }));
            // router.replace('/admin-panel/products');
        }
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Products | Create</title>
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
                    <div className={styles.inpsContainerMain}>
                        {namesArr?.map((input, index) => {
                            return (
                                <div className={styles.inpsContainer} key={index}>
                                    <div className={styles.title}>Common Names</div>
                                    <div className={styles.inps}>
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Name (AR)'
                                            value={input?.name_ar}
                                            onChange={(e) => handleNameArChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Name (EN)'
                                            value={input?.name_en}
                                            onChange={(e) => handleNameEnChange(e, index)}
                                        />
                                    </div>
                                    <div
                                        className={styles.inpsAdd}
                                        onClick={handleAddInput}
                                    >+</div>
                                    <div
                                        className={styles.inpsRemove}
                                        onClick={() => handleRemoveInput(index)}
                                        style={
                                            namesArr.length == 1 ? {
                                                cursor: 'default',
                                                opacity: '0.5'
                                            } : {}
                                        }
                                    >-</div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.inpsContainerMain}>
                        {alternativesArr?.map((input, index) => {
                            return (
                                <div className={styles.inpsContainer} key={index}>
                                    <div className={styles.title}>Alternatives</div>
                                    <div className={styles.inps}>
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Name (AR)'
                                            value={input?.name_ar}
                                            onChange={(e) => handleAlterNameArChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Name (EN)'
                                            value={input?.name_en}
                                            onChange={(e) => handleAlterNameEnChange(e, index)}
                                        />
                                        <input
                                            className={styles.file}
                                            type='file'
                                            onChange={(e) => handleAlterImageChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Website'
                                            value={input?.website}
                                            onChange={(e) => handleAlterWebsiteChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Facebook'
                                            value={input?.facebook}
                                            onChange={(e) => handleAlterFacebookChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Instagram'
                                            value={input?.instagram}
                                            onChange={(e) => handleAlterInstagramChange(e, index)}
                                        />
                                        <input
                                            className={styles.inp}
                                            type='text'
                                            placeholder='Phone'
                                            value={input?.phone}
                                            onChange={(e) => handleAlterPhoneChange(e, index)}
                                        />
                                    </div>
                                    <div
                                        className={styles.inpsAdd}
                                        onClick={handleAlterAddInput}
                                    >+</div>
                                    <div
                                        className={styles.inpsRemove}
                                        onClick={() => handleAlterRemoveInput(index)}
                                        style={
                                            alternativesArr.length == 1 ? {
                                                cursor: 'default',
                                                opacity: '0.5'
                                            } : {}
                                        }
                                    >-</div>
                                </div>
                            );
                        })}
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

export default AddProducts;
