import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Check if the item is already in the cart
      const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        // If the item exists, increase the quantity
        state[existingItemIndex].quantity += 1;
      } else {
        // If the item does not exist, add it with a quantity of 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Find the item by ID and update its quantity
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state[itemIndex].quantity = action.payload.quantity;
      }
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
