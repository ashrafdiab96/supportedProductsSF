import React, { useState, useEffect } from 'react';
import styles from './brands.module.scss';
import Head from 'next/head';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ConfirmDelete from '@/components/ConfirmDelete/ConfirmDelete';
import { brandsThunk, deleteBrandThunk } from '@/redux/thunks/brandsThunk';

const Brands = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const { brands, loading } = useSelector(state => state.brands);

    useEffect(() => {
        dispatch(brandsThunk(1));
    }, []);

    const handlePagination = (page) => {
        setCurrentPage(page);
        dispatch(brandsThunk(page));
    };

    const handleNextPage = () => {
        if (currentPage == brands?.last_page) return;
        setCurrentPage(currentPage + 1);
        dispatch(brandsThunk(currentPage + 1));
    };

    const handlePrevPage = () => {
        if (currentPage == 1) return;
        setCurrentPage(currentPage - 1);
        dispatch(brandsThunk(currentPage - 1));
    };

    const handleOpen = async (id) => {
        setIsOpen(true);
        setSelectedItem(id);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleDelete = async () => {
        await dispatch(deleteBrandThunk(selectedItem));
        dispatch(brandsThunk(currentPage));
        setIsOpen(false);
    };

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Brands</title>
                </Head>
                <div className={styles.data}>
                    <Link
                        className={styles.addBtn}
                        href={`/admin-panel/brands/add`}
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
                            {brands?.data?.length ? (
                                brands?.data?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{item?.id}</th>
                                            <th>{item?.name_ar}</th>
                                            <th>{item?.name_en}</th>
                                            <th>
                                                <Link
                                                    className={styles.editBtn}
                                                    href={`/admin-panel/brands/edit/${item?.id}`}
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
                                {brands?.links?.slice(1, -1)?.map((item, index) => {
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

export default Brands;
