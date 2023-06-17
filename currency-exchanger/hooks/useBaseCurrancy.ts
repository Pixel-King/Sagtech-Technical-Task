import { AppDispatch, RootState } from "@/store";
import { fetchBaseCurrency } from "@/store/slices/currencySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useBaseCurrancy = () => {
    const curr = useSelector((state: RootState) => state.currency.baseCurrency);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!curr) dispatch(fetchBaseCurrency());
    }, [curr, dispatch]);

    return curr;
}