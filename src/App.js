import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { store, addItem } from "./store";

// Component to display the shopping cart
function ShoppingCart() {
  const cartItems = useSelector((state) => state);
  const cartTotal = useSelector((state) =>
    state.reduce((total, item) => total + item.price * item.quantity, 0)
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={item.id}>
          <span>{index + 1} </span>
          <span>Price: ${item.price} </span>
          {/* <span>Quantity: {item.quantity}</span> */}
        </div>
      ))}
      <div>Total Items :{cartItems.length}</div>
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
}

// Component to add items to the cart
function AddToCart() {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: "ABC",
      price: Math.floor(Math.random() * 100),
      quantity: 1
    };
    dispatch(addItem(newItem));
  };

  return (
    <div>
      <h2>Add to Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

// App component
function App() {
  return (
    <Provider store={store}>
      <div>
        <ShoppingCart />
        <AddToCart />
      </div>
    </Provider>
  );
}

// Wrap the App component with the Redux Provider
// const AppWithStore = () => (
//     <App />
//   </Provider>
// );

export default App;
