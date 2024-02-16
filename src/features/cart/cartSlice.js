import { createSlice } from '@reduxjs/toolkit';
import { filter, reduce, find } from 'lodash-es';
import { SLICE_NAMES } from '../../constants/constants';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: SLICE_NAMES.CART,
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = filter(
        state.cart,
        (item) => item.pizzaId !== action.payload,
      );
    },

    increaseItemQuantity(state, action) {
      const item = find(state.cart, (item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    deceaseItemQuantity(state, action) {
      const item = find(state.cart, (item) => item.pizzaId === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
      }
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  deceaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  reduce(state.cart.cart, (sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  reduce(state.cart.cart, (sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getItemQuantity = (id) => (state) =>
  find(state.cart.cart, (item) => item.pizzaId === id)?.quantity ?? 0;
