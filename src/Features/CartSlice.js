import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    amount: 0,
    total: 0,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducer:{
        clearCart: (state, payload) =>{

        },
        addToCart: (state, payload) => {
            return{

            }
        },
        removeFromCart: (state, payload) => {
            return {
                
            }
        }
    }
})

export default CartSlice.reducer