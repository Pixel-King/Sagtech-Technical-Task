import React from 'react';
import Converter from '@/components/Converter/Converter';
import styles from '@/styles/page.module.scss';
import CurrencySelectorOptions from '@/components/CurrencySelectorOptions';
import { NextRequest } from 'next/server';
import { convertCurrencies } from '@/api/exchangerateApi';


export default async function Page(req: any) {
  // const { searchParams } = new URL(req.url);
  const {searchParams} = req;
  let res; 
  const from = searchParams?.from
  const to = searchParams?.to;
  const amount = searchParams?.amount;
  
  if (from && to && amount) {
    res = await convertCurrencies(from, to , +amount);
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Currency Converter</h1>
        <Converter res={{
          from,
          to,
          amount,
          result: res,
        }}>
          <CurrencySelectorOptions />
        </Converter>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Currency Converter</h1>
        <Converter>
          <CurrencySelectorOptions />
        </Converter>
      </div>
    );
  }
};
