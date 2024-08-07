import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      if (
        state.cart.map((item) => item.pizzaId).includes(action.payload.pizzaId)
      )
        return;
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice += item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      if (item.quantity === 1) {
        // trick to use the other reducers from inside a reducer
        cartSlice.caseReducers.deleteItem(state, action);
        return;
      }
      if (item.quantity > 0) {
        item.quantity--;
        item.totalPrice -= item.unitPrice;
      }
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
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//To optimise redux selector, check `reselect` library.

export function getCart(state) {
  return state.cart.cart;
}

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => (sum += item.quantity), 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => (sum += item.totalPrice), 0);
}

export function getCurrentQuantityById(id) {
  return function (state) {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };
}
