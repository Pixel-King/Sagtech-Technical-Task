import { getCurrenciesList } from "@/api/exchangerateApi";

const CurrencySelectorOptions = async () => {
  const currancies = await getCurrenciesList();
  return (
      <>
        {currancies.map((currency: string[]) => (
          <option key={currency[0]} value={currency[0]} className="currancies-select__options">{`${currency[0]} ${currency[1]}`}</option>
        ))}
      </>
  );
};
export default CurrencySelectorOptions;
