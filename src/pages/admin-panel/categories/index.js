import React, { useState } from 'react';
import styles from './categories.module.scss';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesThunk } from '@/redux/thunks/categoriesThunk';
import { useEffect } from 'react';
import Link from 'next/link';
import DeleteIcon from '@/components/UI/icons/DeleteIcon';
import EditIcon from '@/components/UI/icons/EditIcon';

const Categories = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const { categories } = useSelector(state => state.categories);

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

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Categories</title>
                </Head>
                <div className={styles.data}>
                    <button className={styles.addBtn}>New</button>
                    <table className='table table-striped table-bordered my-0 mx-auto'>
                        <thead>
                            <th>ID</th>
                            <th>Name (AR)</th>
                            <th>Name (EN)</th>
                            <th>Actions</th>
                        </thead>
                        <tbody class="table-group-divider">
                            {categories?.data?.length ? (
                                categories?.data?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{item?.id}</th>
                                            <th>{item?.name_ar}</th>
                                            <th>{item?.name_en}</th>
                                            <th>
                                                <button className={styles.editBtn}>Edit</button>
                                                <button className={styles.removeBtn}>Remove</button>
                                            </th>
                                        </tr>
                                    );
                                })
                            ) : null}
                        </tbody>
                    </table>
                    <div className={styles.pagination}>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <Link
                                        class="page-link" href="#"
                                        onClick={handlePrevPage}
                                    >Previous</Link>
                                </li>
                                {categories?.links?.slice(1, -1)?.map((item, index) => {
                                    return (
                                        <li class="page-item" key={index}>
                                            <Link
                                                class="page-link" href='#'
                                                onClick={() => handlePagination(item?.label)}
                                            >
                                                {item?.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li class="page-item">
                                    <Link
                                        class="page-link" href="#"
                                        onClick={handleNextPage}
                                    >Next</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Categories;
