'use client'
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { useBaseCurrancy } from '@/hooks/useBaseCurrancy';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '@/store/slices/currencySlice';
import { ChangeEvent, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Header({children}: {children: React.ReactNode}) {
  const [currancy, setCurrancy] = useState<string>();
  const baseCur = useBaseCurrancy();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setBaseCurrency(value));
    setCurrancy(value);
    if (pathname.startsWith('/rates')) router.push(`/rates/${baseCur}`);
  }

  useEffect(() => {
    if (baseCur) setCurrancy(baseCur);
  }, [baseCur]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={pathname.startsWith('/') ? styles.active : ''}>
          <Image src={logo} alt='boroda.dev logo'/>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <span className={pathname === '/' ? styles.active : ''}>Converter</span>
            </Link>
          </li>
          <li>
            <Link href={`/rates/${currancy}`}>
              <span className={pathname.startsWith('/rates') ? styles.active : ''}>Exchange Rates</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.currencySelector}>
        <label htmlFor="baseCurrency">Base Currency:</label>
        <select id="baseCurrency" className={styles.select} value={currancy} onChange={changeHandler}>
          {children}
        </select>
        <span className={styles['arrow-icon']}>&#9662;</span>
      </div>
    </header>
    )
}
// onChange={(e: any) => console.log(e.target.value)