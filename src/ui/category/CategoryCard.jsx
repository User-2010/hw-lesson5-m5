import React from 'react';
import styles from './CategoryCard.module.scss';

export const CategoryCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={item.image} alt={item.product_cart} className={styles.icon} />
      </div>
      <span className={styles.title}>{item.product_cart}</span>
    </div>
  );
};

export default CategoryCard;