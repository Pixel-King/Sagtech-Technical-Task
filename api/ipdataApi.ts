import axios, { AxiosPromise } from "axios";

export interface Currency {
    name: string
    code: string
    symbol: string
    native: string
    plural: string
}

export const getUserCurrancy = async () => await axios.get<any, AxiosPromise<Currency>>(
    `https://api.ipdata.co/currency?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`
)
