import { getCurrenciesList } from "@/api/exchangerateApi";

export default async function CurrencySelectorOptions() {
  // const currancies = await getCurrenciesList();

  // if (currancies) {
  //   return (
  //     <>
  //       {currancies.map((currency: string[]) => (
  //         <option key={currency[0]} value={currency[0]} className="currancies-select__options">{`${currency[0]} ${currency[1]}`}</option>
  //       ))}
  //     </>
  // );
  // } else { 
    return <option value="USD">USD Dollar</option>
  // }
};
