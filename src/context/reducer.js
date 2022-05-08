import { toast } from "react-toastify";

export const initialState = {
  basket: [],
  order: false,
};

// total amount and total items
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price + amount) * item.quantity, 0);
export const getItemsTotal = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);
//our reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //we see if product that dispatched id=== with a basket's array product id
      const productInCart = state.basket.find((p) => p.id === action.item.id);
      //if the product its not in basket array
      if (!productInCart) {
        //toast
        toast.success(`You added 1  ${action.item.name} to basket.`, {
          position: "top-right",
          autoClose: 2000,
          //toast
        });
        return {
          ...state,
          //spread all state.basket(give me all data you have,and add action.item(from dispatch method))
          basket: [...state.basket, action.item],
          popup: action.popup,
        };
      }
      //if it is
      //map all the basket array
      // and if an element's id === product that dispatched id
      // return all the id equaled item and increse its quantiy
      // else return items that does not pass the if criteria
      //after updatedCart logic above...
      //return the whole state spreaded and set basket to updated basket
      else {
        //toast
        toast.success(`You added + 1 ${action.item.name}.`, {
          position: "top-right",
          autoClose: 2000,
          //toast
        });
        const updatedCart = state.basket.map((curElem) => {
          if (curElem.id === action.item.id) {
            return { ...curElem, quantity: curElem.quantity + 1 };
          }

          return curElem;
        });

        return { ...state, basket: updatedCart };
      }

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      //findIndex found the index of item that passes the criteria
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //we make a new variable with spreaded the state.basket to modify it below
      let newBasket = [...state.basket];

      if (index >= 0) {
        //Remove 1 element at index(we found above)
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        //we set basket into our new modified variable
        basket: newBasket,
      };
    case "ORDER":
      return {
        ...state,
        order: action.order,
      };

    default:
      return state;
  }
};

export default reducer;
