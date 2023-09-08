import {configureStore} from '@reduxjs/toolkit'
import cartReucer from './cartSlice';


const store = configureStore({
    reducer:{
        cart:cartReucer,
    },
});

export default store;