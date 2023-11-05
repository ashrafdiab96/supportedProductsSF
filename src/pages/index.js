import React, { useEffect } from "react";
import Head from "next/head";
import styles from "./Home.module.scss";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "@/redux/thunks/productsThunk";
import ProductCard from "@/components/ProductCard/ProductCard";
import { brandsThunk } from "@/redux/thunks/brandsThunk";

const Dashboard = () => {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products);
    const { brands } = useSelector(state => state.brands);

    useEffect(() => {
        dispatch(productsThunk(1));
        dispatch(brandsThunk(1));
    }, []);

    const habdleSearch = () => {};

    return (
        <DefaultLayout>
            <Head>
                <title>مقاطعة</title>
            </Head>
            <div className={styles.main}>
                {/* <div className={styles.banner}>
                    <img className={styles.bannerImg} src='/images/boycott.jpg' alt="boycott-image" />
                </div> */}
                <div className={styles.search}>
                    <input
                        className={styles.inp}
                        type="text"
                        onChange={habdleSearch}
                        placeholder="ابحث عن منتج أو براند"
                    />
                    {/* <i class="fas fa-search"></i> */}
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles.title}>قاطع المنتجات دي</div>
                <div className={styles.list}>
                    {products?.data?.slice(0, 6)?.map((item, index) => {
                        return (
                            <ProductCard
                                className={styles.item}
                                key={index}
                                product={item}
                            />
                        );
                    })}
                </div>
                <div className={styles.title}>قاطع البراندات دي</div>
                <div className={styles.list}>
                    {brands?.data?.slice(0, 6)?.map((item, index) => {
                        return (
                            <ProductCard
                                className={styles.item}
                                key={index}
                                product={item}
                            />
                        );
                    })}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Dashboard;
