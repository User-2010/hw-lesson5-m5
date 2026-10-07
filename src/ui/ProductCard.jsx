import React from 'react';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ product }) => {
  if (!product) return null;

  if (product.isBanner) {
    return (
      <div className={styles.bannerOnly}>
        <img src={product.image} alt={product.product_cart} className={styles.bannerImg} />
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.product_cart} className={styles.image} />
        <button className={styles.likeBtn} type="button" aria-label="Add to favorites">
          ❤️
        </button>
      </div>

      <h3 className={styles.title}>{product.product_cart}</h3>

      <div className={styles.meta}>
        {product.time && <span className={styles.badge}>⏱ {product.time}</span>}
        {product.category && <span className={styles.badge}>🍽 {product.category}</span>}
      </div>
    </div>
  );
};

export default ProductCard;