import {createAsyncThunk} from '@reduxjs/toolkit';
import getTickers from '../../services/ticketsApi';

const fetchTickers=createAsyncThunk('tickers/fetchTickers',
async(_,{rejectWithValue})=>{
    try{
        const tickers= await getTickers();
        return tickers;
    }catch(error){
        return rejectWithValue(error)

    }
});

export default fetchTickers;