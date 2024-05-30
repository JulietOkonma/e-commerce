import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  storedItems: [],
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
  },
});

export const { addCounter, removeCounter } = slice.actions;
export default slice.reducer;
