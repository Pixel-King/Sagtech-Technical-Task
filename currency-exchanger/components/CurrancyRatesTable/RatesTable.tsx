import { NumberObject } from '@/api/exchangerateApi';
import styles from './RatesTable.module.scss';

function RatesTable({
    cur_code,
    rates,
}:{
    cur_code: string,
    rates: NumberObject,
}) {
    return (
      <div >
        <table className={styles.ratestable}>
          <thead>
            <tr>
              <th scope="col" className={styles.th}>Base Currency</th>
              <th scope="col" className={styles.th}>Currency code</th>
              <th scope="col" className={styles.th}>Average exchange rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates).map(([key, value]) => (
              <tr key={key} className={styles.tr}>
                <td className={styles.tb}>{`1 ${cur_code}`}</td>
                <td className={styles.tb}>
                  <span>{key}</span>
                </td>
                <td className={styles.tb}>
                  <span>{value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ); 
}

export default RatesTable;