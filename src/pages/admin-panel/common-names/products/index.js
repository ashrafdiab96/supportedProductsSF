import React, { useState } from 'react';
import styles from './productsCN.module.scss';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Link from 'next/link';
import ConfirmDelete from '@/components/ConfirmDelete/ConfirmDelete';
import { deleteProductCNThunk, productCNThunk, productsCNThunk } from '@/redux/thunks/productsThunk';

const ProductsCommonNames = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const { productsCN, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(productsCNThunk(1));
    }, []);

    const handlePagination = (page) => {
        setCurrentPage(page);
        dispatch(productsCNThunk(page));
    };

    const handleNextPage = () => {
        if (currentPage == productsCN?.last_page) return;
        setCurrentPage(currentPage + 1);
        dispatch(productsCNThunk(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage == 1) return;
        setCurrentPage(currentPage - 1);
        dispatch(productsCNThunk(currentPage - 1));
    };

    const handleOpen = async (id) => {
        setIsOpen(true);
        setSelectedItem(id);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDelete = async () => {
        await dispatch(deleteProductCNThunk(selectedItem));
        dispatch(productsCNThunk(currentPage));
        setIsOpen(false);
    };

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Products Common Names</title>
                </Head>
                <div className={styles.data}>
                    <Link
                        className={styles.addBtn}
                        href={`/admin-panel/common-names/products/add`}
                    >New</Link>
                    <table className='table table-striped table-bordered my-0 mx-auto'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name (AR)</th>
                                <th>Name (EN)</th>
                                <th>Category</th>
                                <th>Product</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {productsCN?.data?.length ? (
                                productsCN?.data?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{item?.id}</th>
                                            <th>{item?.name_ar}</th>
                                            <th>{item?.name_en}</th>
                                            <th>{item?.category?.name_ar}</th>
                                            <th>{item?.product?.name_ar}</th>
                                            <th>
                                                <Link
                                                    className={styles.editBtn}
                                                    href={`/admin-panel/common-names/products/edit/${item?.id}`}
                                                >Edit</Link>
                                                <a
                                                    className={styles.removeBtn}
                                                    onClick={() => handleOpen(item?.id)}
                                                >Remove</a>
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
                                {productsCN?.links?.slice(1, -1)?.map((item, index) => {
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
            <ConfirmDelete
                open={isOpen}
                loading={loading}
                handleClose={handleClose}
                handleDelete={handleDelete}
            />
        </AdminLayout>
    );
}

export default ProductsCommonNames;
