import axios, { AxiosPromise } from "axios";

export interface Currency {
    name: string
    code: string
    symbol: string
    native: string
    plural: string
}

export const getUserCurrancy = async () => await axios.get<any, AxiosPromise<Currency>>('https://api.nbrb.by/exrates/currencies')
