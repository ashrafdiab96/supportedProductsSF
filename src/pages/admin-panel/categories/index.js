import React, { useState } from 'react';
import styles from './categories.module.scss';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesThunk, deleteCategoryThunk } from '@/redux/thunks/categoriesThunk';
import { useEffect } from 'react';
import Link from 'next/link';
import ConfirmDelete from '@/components/ConfirmDelete/ConfirmDelete';

const Categories = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const { categories, loading } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(categoriesThunk(1));
    }, []);

    const handlePagination = (page) => {
        setCurrentPage(page);
        dispatch(categoriesThunk(page));
    };

    const handleNextPage = () => {
        if (currentPage == categories?.last_page) return;
        setCurrentPage(currentPage + 1);
        dispatch(categoriesThunk(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage == 1) return;
        setCurrentPage(currentPage - 1);
        dispatch(categoriesThunk(currentPage - 1));
    };

    const handleOpen = async (id) => {
        setIsOpen(true);
        setSelectedItem(id);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDelete = async () => {
        await dispatch(deleteCategoryThunk(selectedItem));
        dispatch(categoriesThunk(currentPage));
        setIsOpen(false);
    };

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Categories</title>
                </Head>
                <div className={styles.data}>
                    <Link
                        className={styles.addBtn}
                        href={`/admin-panel/categories/add`}
                    >New</Link>
                    <table className='table table-striped table-bordered my-0 mx-auto'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name (AR)</th>
                                <th>Name (EN)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {categories?.data?.length ? (
                                categories?.data?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{item?.id}</th>
                                            <th>{item?.name_ar}</th>
                                            <th>{item?.name_en}</th>
                                            <th>
                                                <Link
                                                    className={styles.editBtn}
                                                    href={`/admin-panel/categories/edit/${item?.id}`}
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
                                {categories?.links?.slice(1, -1)?.map((item, index) => {
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

export default Categories;
