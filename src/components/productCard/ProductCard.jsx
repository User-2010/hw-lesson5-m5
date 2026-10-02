import React from 'react';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.meta}>
          <span className={styles.badge}> {product.time}</span>
          <span className={styles.badge}> {product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;