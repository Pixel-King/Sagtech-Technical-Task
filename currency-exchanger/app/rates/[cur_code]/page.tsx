import { NumberObject, getRates } from '@/api/exchangerateApi';
import RatesTable from '@/components/CurrancyRatesTable/RatesTable';
import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

type Props = {
  params: {
    cur_code: string, 
  }
}

export async function generateMeradata({params: { cur_code }}: Props): Promise<Metadata> {
    return {
      title: `${cur_code} rates`,
    }
}

async function Rates({params: { cur_code }}: Props) {
  const rates: NumberObject = await getRates(cur_code);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{cur_code} Rates</h1>
      <RatesTable cur_code={cur_code} rates={rates} />
    </div>
  );
};

export default Rates;