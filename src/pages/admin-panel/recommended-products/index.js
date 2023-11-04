import React, { useState, useEffect } from 'react';
import styles from './recommendedProducts.module.scss';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { recommendedProductsThunk } from '@/redux/thunks/productsThunk';

const Products = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const { productsRecommended } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(recommendedProductsThunk(1));
    }, []);

    const handlePagination = (page) => {
        setCurrentPage(page);
        dispatch(productsThunk(page));
    };

    const handleNextPage = () => {
        if (currentPage == productsRecommended?.last_page) return;
        setCurrentPage(currentPage + 1);
        dispatch(productsThunk(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage == 1) return;
        setCurrentPage(currentPage - 1);
        dispatch(productsThunk(currentPage - 1));
    };

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Products</title>
                </Head>
                <div className={styles.data}>
                    <Link
                        className={styles.addBtn}
                        href={`/admin-panel/products/add`}
                    >New</Link>
                    <div className={styles.tableContainer}>
                        <table className='table table-responsive table-striped table-bordered my-0 mx-auto'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Type</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Boycott Product</th>
                                    <th>Boycott Image</th>
                                    <th>Altervative Product</th>
                                    <th>Altervative Image</th>
                                    <th>Social Media</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {productsRecommended?.data?.length ? (
                                    productsRecommended?.data?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{item?.id}</th>
                                                <th>{item?.type == 1 ? 'Product' : 'Brand'}</th>
                                                <th>{item?.name}</th>
                                                <th>{item?.phone}</th>
                                                <th>{item?.email}</th>
                                                <th>{item?.product_name}</th>
                                                <th>{item?.product_image}</th>
                                                <th>{item?.alternative_name}</th>
                                                <th>{item?.alternative_image}</th>
                                                <th>
                                                    <div className={styles.social}>
                                                        {item?.alternative_website ? (
                                                            <Link className={styles.socialLink} href={item?.alternative_website} target='_blank'>
                                                                <i class="fa-solid fa-globe"></i> - {item?.alternative_website}
                                                            </Link>
                                                        ) : null}
                                                        {item?.alternative_facebook ? (
                                                            <Link className={styles.socialLink} href={item?.alternative_facebook} target='_blank'>
                                                                <i class="fa-brands fa-facebook"></i> - {item?.alternative_facebook}
                                                            </Link>
                                                        ) : null}
                                                        {item?.alternative_instagram ? (
                                                            <Link className={styles.socialLink} href={item?.alternative_instagram} target='_blank'>
                                                                <i class="fa-brands fa-square-instagram"></i> - {item?.alternative_instagram}
                                                            </Link>
                                                        ) : null}
                                                        {item?.alternative_phone ? (
                                                            <div className={styles.socialLink}>
                                                                <i class="fa-solid fa-phone-volume"></i> - {item?.alternative_phone}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </th>
                                            </tr>
                                        );
                                    })
                                ) : null}
                            </tbody>
                        </table>
                        <div className={styles.pagination}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link
                                            className="page-link" href="#"
                                            onClick={handlePrevPage}
                                        >Previous</Link>
                                    </li>
                                    {productsRecommended?.links?.slice(1, -1)?.map((item, index) => {
                                        return (
                                            <li className="page-item" key={index}>
                                                <Link
                                                    className="page-link" href='#'
                                                    onClick={() => handlePagination(item?.label)}
                                                >
                                                    {item?.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                    <li className="page-item">
                                        <Link
                                            className="page-link" href="#"
                                            onClick={handleNextPage}
                                        >Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Products;
