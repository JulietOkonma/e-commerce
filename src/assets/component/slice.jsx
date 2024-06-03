import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  storedItems: [],
  cartItems:[],
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state, action) => {
      const counter = {
        id: nanoid(), 
        text: action.payload,
      };
      state.storedItems.push(counter);
    },
    removeCounter: (state, action) => {
      state.storedItems = state.storedItems.filter((counter) =>
        counter.id !== action.payload
      );
    },
    
    addToCart: (state, action) => {
      const newItem = {
        id: action.payload.id,
        text: action.payload.text,
        image:action.payload.image,
        quantity: 1, 
      };
      state.cartItems.push(newItem);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity,   addCounter, removeCounter } = slice.actions;
export default slice.reducer;
