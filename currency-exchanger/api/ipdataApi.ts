import axios, { AxiosPromise } from "axios";

export interface baseCurrency {
    name: string
    code: string
    symbol: string
    native: string
    plural: string
}

export const getUserCurrancy = async () => await axios.get<any, AxiosPromise<baseCurrency>>('https://api.nbrb.by/exrates/currencies')
