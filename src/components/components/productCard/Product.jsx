import React from 'react';
import ProductCard from '../../../ui/ProductCard';
import styles from './ProductCard.module.scss';

export const Product = ({ items = [] }) => {
  return (
    <section className={styles.section}>
      <h2>Simple and tasty recipes</h2>
      <div className={styles.grid}>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
};

export default Product;