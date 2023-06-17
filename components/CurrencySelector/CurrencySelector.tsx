'use client'
import { ChangeEvent } from 'react';
import styles from './CurrencySelector.module.scss';

export default function CurrencySelector({
  value,
  onSelect,
  children
}: {
  value: string,
  onSelect: (curCode: ChangeEvent<HTMLSelectElement>) => void,
  children: React.ReactNode
}) {
  return (
    <div className={styles['currency-selector']}>
      <select onChange={onSelect} value={value}>
         {children}
      </select>
      <span className={styles['arrow-icon']}>&#9662;</span>
    </div>
  );
};