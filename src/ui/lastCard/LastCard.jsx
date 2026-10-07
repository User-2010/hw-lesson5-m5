
import React from 'react';
import styles from './LastCard.module.scss';

export const LastCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.product_cart} className={styles.image} />
        <button className={styles.likeBtn} type="button" aria-label="Add to favorites">
          ❤️
        </button>
      </div>

      <h3 className={styles.title}>{item.product_cart}</h3>

      <div className={styles.meta}>
        {item.time && <span className={styles.badge}>⏱ {item.time}</span>}
        {item.category && <span className={styles.badge}>🍽 {item.category}</span>}
      </div>
    </div>
  );
};

export default LastCard;