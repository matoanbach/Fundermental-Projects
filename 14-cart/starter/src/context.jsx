import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";
import cartItems from "./data";
import { getToTals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const greeting = "hello";
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getToTals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, _id: id });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, _id: id });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, _id: id });
  };
  const fetchData = async () => {
    dispatch({type: LOADING})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: DISPLAY_ITEMS, _cart: cart})
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
