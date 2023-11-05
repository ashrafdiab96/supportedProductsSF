import React from 'react';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className={styles.name}>{product?.name_ar}</div>
                <div className={styles.name}>{product?.name_en}</div>
            </div>
            <img
                className={styles.img}
                src={`${process.env.NEXT_PUBLIC_API_URL}/assets/images/products/${product.image}`}
                alt={`${product?.name_ar}-product-image`}
            />
        </div>
    );
}

export default ProductCard;