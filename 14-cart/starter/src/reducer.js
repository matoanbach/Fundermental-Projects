import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  } else if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action._id);
    return { ...state, cart: newCart };
  } else if (action.type === INCREASE) {
    const newCart = new Map(state.cart);

    const item = newCart.get(action._id);

    const newItem = { ...item, amount: item.amount + 1 };

    newCart.set(action._id, newItem);

    return { ...state, cart: newCart };
  } else if (action.type === DECREASE) {
    const newCart = new Map(state.cart);

    const item = newCart.get(action._id);

    if (item.amount === 1) {
      newCart.delete(action._id);
      return { ...state, cart: newCart };
    } else {
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(action._id, newItem);
      return { ...state, cart: newCart };
    }
  } else if (action.type === LOADING) {
    return { ...state, loading: true };
  } else if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action._cart.map((item) => [item.id, item]))
    return { ...state, loading: false, cart: newCart };
  }
  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
