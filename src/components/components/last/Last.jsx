// src/components/components/last/Last.jsx
import React from 'react';
import LastCard from '../../../ui/lastCard/LastCard';
import styles from './Last.module.scss';

export const Last = ({ items = [] }) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Try this delicious recipe to make your day</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <LastCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Last;