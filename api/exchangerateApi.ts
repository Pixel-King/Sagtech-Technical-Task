export type NumberObject = Record<string, number>;

export interface Latest {
    result: string
    documentation: string
    terms_of_use: string
    time_last_update_unix: number
    time_last_update_utc: string
    time_next_update_unix: number
    time_next_update_utc: string
    base_code: string
    conversion_rates: NumberObject
}

export interface CurCodes {
    result: string
    documentation: string
    terms_of_use: string
    supported_codes: string[][]
}

export interface ConverterResponce {
    result: string
    documentation: string
    terms_of_use: string
    time_last_update_unix: number
    time_last_update_utc: string
    time_next_update_unix: number
    time_next_update_utc: string
    base_code: string
    target_code: string
    conversion_rate: number
    conversion_result: number
}

export async function getCurrenciesList() {
    "use server"
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/codes`, {cache: 'no-cache'});
        const { supported_codes }: CurCodes =  await res.json();
        return supported_codes;
    } catch {
        throw new Error('Failed to fetch data');
    }
} ;

// 
export async function getRates(cur: string) {
    "use server"
    try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/${cur}`, {cache: 'no-cache'});
        const { conversion_rates } = await res.json();
        return conversion_rates;
    } catch {
        throw new Error('Failed to fetch data');
    }
}

export async function convertCurrencies (fromCurrency: string, toCurrency:string, amount: number) {
    try {
        const res= await fetch(`https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`, {cache: 'no-cache'});
        const { conversion_result }: ConverterResponce = await res.json();
        return conversion_result;
    } catch {
        throw new Error('Failed to fetch data');
    }
}
