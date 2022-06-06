import { useContext, useReducer, createContext } from "react";

const CartContext = createContext();

const initialState = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productExists = state.products.find((product) => product._id === action.payload._id);

      if (productExists) {
        const cartProducts = state.products.filter((product) => product._id !== productExists._id);
        console.log(cartProducts);
        return {
          ...state,
          products: [
            ...cartProducts,
            { ...productExists, quantity: productExists.quantity + action.payload.quantity },
          ],
        };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      }
    case "INCREASE_CART":
      return console.log(action.payload);

    case "DECREASE_CART":
      return console.log(action.payload);
    default:
      return state;
  }
}

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const CartStates = {
    ...state,
    addProduct: (product) => dispatch({ type: "ADD_PRODUCT", payload: product }),
    increaseCart: (productId) => dispatch({ type: "INCREASE_CART", payload: productId }),
    decreaseCart: (productId) => dispatch({ type: "DECREASE_CART", payload: productId }),
  };

  return <CartContext.Provider value={CartStates}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartContextProvider, useCart };
