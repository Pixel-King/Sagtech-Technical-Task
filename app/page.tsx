import React from 'react';
import Converter from '@/components/Converter/Converter';
import styles from '@/styles/page.module.scss';
import CurrencySelectorOptions from '@/components/CurrencySelectorOptions';
import { convertCurrencies } from '@/api/exchangerateApi';


export default async function Page(req: any) {
  // const { searchParams } = new URL(req.url);
  const {searchParams} = req;
  const from = searchParams?.from
  const to = searchParams?.to;
  const amount = searchParams?.amount;
  
  if (from && to && amount) {
    const res = await convertCurrencies(from, to , +amount);
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Currency Converter</h1>
            {res && <Converter res={{
            from,
            to,
            amount,
            result: res,
          }}> 
            <CurrencySelectorOptions />
          </Converter>
        }
        {!res && <Converter res={{
            from,
            to,
            amount,
            result: res,
          }}>
            <CurrencySelectorOptions />
          </Converter>
        }
      </div>
    );
  }
};
