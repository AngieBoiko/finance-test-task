import { createReducer, combineReducers } from '@reduxjs/toolkit';
import fetchTickers from './tickersOperations';

const items = createReducer([], {
  [fetchTickers.fulfilled]: (_, action) => action.payload,
});

const isloading=createReducer(false,{
    [fetchTickers.pending]:()=>true,
    [fetchTickers.fulfilled]:()=>false,
    [fetchTickers.rejected]:()=>false
});

const error=createReducer(null,{
    [fetchTickers.rejected]:(_,action)=>action.payload,
    [fetchTickers.pending]:()=>null
})

const tickersReducer=combineReducers({
    items,
    isloading,
    error
});

export default tickersReducer;