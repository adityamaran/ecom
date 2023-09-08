import {createSlice} from '@reduxjs/toolkit';
const initialState = [];
// let cnt =0;

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
         
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=>item._id!==action.payload)
        },
        
    }

})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer 