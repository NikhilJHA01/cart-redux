import { createStore } from "redux";

// ActionTypes
export const ADD_ITEM = "ADD_ITEM";

// Action creators
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

// Reducer
export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

// Create Redux store
export const store = createStore(cartReducer);
