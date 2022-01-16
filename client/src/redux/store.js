import {configureStore} from '@reduxjs/toolkit';
import tickersReducer from './tickers/tickersReducer';

 const store=configureStore({
    reducer:{
        tickers:tickersReducer
    }

})

export default store;