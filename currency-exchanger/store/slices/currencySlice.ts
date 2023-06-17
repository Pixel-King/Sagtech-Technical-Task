import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Currency, getBaseCurrency } from '@/api/currencyApi';

export const fetchBaseCurrency = createAsyncThunk('currency/fetchCurrency', async () => {
    const res = await getBaseCurrency();
    return res.code;
});

interface InitialState {
    baseCurrency: string | null,
    currencies: Currency[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: any,
} 

const initialState: InitialState = {
    baseCurrency: null,
    currencies: [],
    status: 'idle',
    error: null,
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBaseCurrency.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.baseCurrency = action.payload;
      })
      .addCase(fetchBaseCurrency.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setBaseCurrency } = currencySlice.actions;

export const selectCurrencyRates = (state: any) => state.currency.rates;

export default currencySlice.reducer;
