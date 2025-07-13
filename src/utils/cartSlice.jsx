import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addItem: (state, action) => {
            const itemPresent = state.items.find((item)=>item.id == action.payload.id);
            if(itemPresent){
                itemPresent.quantity++;
            }
            else{
                state.items.push({...action.payload, quantity:1})
                toast.success("added To Cart !",{
                    autoClose: 2000,
                    pauseOnHover: false,
                    closeOnClick: true,
                    position:'top-center'
                })
            }
         },
        removeItem: (state, action) => {
            const removeFromCart = state.items.filter((item,i)=>item.id !== action.payload.id)
            state.items = removeFromCart;
         },
         incrementQuantity: (state,action)=>{
            console.log(action.payload.stock)
            if(action.payload.stock >    action.payload.quantity){
            const itemPresent = state.items.find((item)=>item.id == action.payload.id);
            itemPresent.quantity++;}
            else{
                toast.error("Maximum Stock limit Reached",{
                     autoClose: 2000,
                    pauseOnHover: false,
                    closeOnClick: true,
                    position:'top-center'
                })
            }
         },
         decrementQuantity: (state,action)=>{
            const itemPresent = state.items.find((item)=>item.id == action.payload.id);
            if(itemPresent.quantity == 1){
                const removeFromCart = state.items.filter((item)=>item.id !== action.payload.id);
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