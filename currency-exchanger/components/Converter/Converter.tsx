"use client"
import React, { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import styles from './Converter.module.scss';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import arrow from '@/public/arrow.png';

interface ConverterResult {
  from: string,
  to: string,
  amount: number,
  result: number,
}

export default function Converter({res, children}: {res?: ConverterResult, children: React.ReactNode}) {
  const [amount, setAmount] = useState<number>(1);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState('');
  const [selectedToCurrency, setSelectedToCurrency] = useState('');
  const [result, setResult] = useState<ConverterResult>();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (res) {
      console.log(res);
      setResult(res);
      setSelectedFromCurrency(res.from);
      setSelectedToCurrency(res.to);
    };
  }, [res, setResult, setSelectedFromCurrency, setSelectedToCurrency]);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    router.push(`${pathname}?from=${selectedFromCurrency}&to=${selectedToCurrency}&amount=${amount}`);
  };

  const handleReset = () => {
   router.push('/');
  };

  const changeCurrance = () => {
   const fromCur = selectedFromCurrency;
   setSelectedFromCurrency(selectedToCurrency);
   setSelectedToCurrency(fromCur);
  };

  const handlAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (+value > 0) setAmount(+value);  
  }

  return (
    <form className={styles.form} onSubmit={(e: any) => handleSubmit(e)}>
      <input type="number" value={amount} onChange={handlAmount} />
      <div className={styles.curSelWrap}>
        <CurrencySelector value={selectedFromCurrency} onSelect={(cur: ChangeEvent<HTMLSelectElement>) => setSelectedFromCurrency(cur.target.value)}>
          {children}
        </CurrencySelector>
        <Image src={arrow} className={styles.pointer} alt={`Convert ${selectedFromCurrency} to ${selectedToCurrency}`} onClick={changeCurrance}/>
        <CurrencySelector value={selectedToCurrency} onSelect={(cur: ChangeEvent<HTMLSelectElement>) => setSelectedToCurrency(cur.target.value)}>
          {children}
        </CurrencySelector>
      </div>
      <div>
        <button type="submit">Convert</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.converterResult}>
        {result && (
          <>
            <p className={styles.resultFrom}>
              {`${result.amount} ${result.from} = `}
            </p>{" "}
            <p className={styles.resultTo}>
              {`${result.result} ${result.to}`}
            </p>
          </>
        )}
      </div>
    </form>
  );
};