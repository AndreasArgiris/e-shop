export const initialState = {
  basket: [],
  user: null,
  userInfo: null,
  popup: false,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price + amount) * item.quantity, 0);
export const getItemsTotal = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);

//   if (action.type === "GET_TOTAL") {
//     let { totalItem, totalAmount } = state.item.reduce(
//       (accum, curVal) => {
//         let { price, quantity } = curVal;

//         let updatedTotalAmount = price * quantity;
//         accum.totalAmount += updatedTotalAmount;

//         accum.totalItem += quantity;
//         return accum;
//       },
//       {
//         totalItem: 0,
//         totalAmount: 0,
//       }
//     );
//     return { ...state, totalItem, totalAmount };
//   }
//   return state;
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const productInCart = state.basket.find((p) => p.id === action.item.id);
      if (!productInCart) {
        return {
          ...state,
          //spread all state.basket(give me all data you have,and add action.item(from dispatch method))
          basket: [...state.basket, action.item],
          popup: action.popup,
        };
      } else {
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

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case "POP_UP":
      return {
        ...state,
        popup: action.popup,
      };

    default:
      return state;
  }
};

export default reducer;
