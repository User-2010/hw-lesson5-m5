
import React from 'react';
import CategoryCard from '../../../ui/category/CategoryCard'; 
import styles from './Category.module.scss';

export const Category = ({ categories = [] }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Categories</h2>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} item={cat} />
        ))}
      </div>
    </section>
  );
};

export default Category;