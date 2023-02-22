import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], productQuantity: 0, showCart: false };

const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems = state.cartItems.push(action.payload);
    },
    addProduct(state) {
      state.productQuantity = state.productQuantity += 1;
    },
    deleteProduct(state) {
      state.productQuantity = state.productQuantity -= 1;
    },
    toogleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
