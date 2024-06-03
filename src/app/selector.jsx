import { createSelector } from 'reselect';

// Input selectors
const selectStoredItems = (state) => state.counter.storedItems;
const selectCartItems = (state) => state.counter.cartItems;



export const selectCartDetails = (state) => state.counter.cartItems;

  (storedItems, cartItems) => {
    return cartItems.map(cartItem => {
      const itemDetails = storedItems.find(item => item.id === cartItem.id);
      return {
        ...cartItem,
        ...itemDetails,
      };
    });
  }

