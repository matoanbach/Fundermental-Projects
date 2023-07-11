import {
  useState,
  useContext,
  createContext,
  useEffect,
  useReducer,
} from "react";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";
import reducer from "./reducer";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const MyApp = createContext();
const initialState = {
  loading: false,
  cart: new Map(),
};
export const MyAppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyApp.Provider
      value={{
        ...state,
        totalAmount,
        totalCost,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </MyApp.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MyApp);
};
