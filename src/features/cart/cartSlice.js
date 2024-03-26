import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      window.localStorage.setItem("cartData", JSON.stringify(state.products));
    },

    addToCartFromLocalStorage: (state, action) => {
      state.products = action.payload;
    },

    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload?.id
      );
      const newCart = [...state.products];

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      state.products = newCart;
      window.localStorage.setItem("cartData", JSON.stringify(state.products));
    },
  },
});

export const selectCartItemsWithId = (state, id) =>
  state.cart.products.filter((item) => item.id === id);
export const itemsCount = (state) => state.cart.products.length;
export const getCartData = (state) => state.cart.products;
export const { addToCart, addToCartFromLocalStorage, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
