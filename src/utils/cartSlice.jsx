import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addItem: (state, action) => {
            const itemPresent = state.items.find((item)=>item.id = action.payload.id);
            state.items.push(action.payload)
            if(itemPresent){
                itemPresent.quantity++;
            }
            else{
                state.items.push({...action.payload, quantity:1})
            }
         },
        removeItem: (state, action) => {
            const removeFromCart = state.items.filter((item,i)=>item.id !== action.payload.id)
            state.items = removeFromCart;
         },
         incrementQuantity: (state,action)=>{
            const itemPresent = state.items.find((item)=>item.id = action.payload.id);
            itemPresent.quantity++;
         },
         decrementQuantity: (state,action)=>{
            const itemPresent = state.items.find((item)=>item.id = action.payload.id);
            if(itemPresent.quantity == 1){
                const removeFromCart = state.cart.filter((item)=>item.id !== action.payload.id);
                state.items = removeFromCart;
            }
            else{
                itemPresent.quantity--;
            }
         },
        clearCart: (state) => {
            state.items.length = 0;
         }
    }
})

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;