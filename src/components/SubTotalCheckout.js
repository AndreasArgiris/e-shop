import React from "react";
//currency library
import CurrencyFormat from "react-currency-format";
//context
import { useStateValue } from "../context/StateProvider";
//reducer
import { getBasketTotal } from "../context/reducer";
///this is the same component as Subtotal.js.This component was made only for different styling implements

function SubtotalCheckout() {
  ///we extract from context
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="subtotal-checkout">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h2>{value}€</h2>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
        />
      </div>
    </>
  );
}

export default SubtotalCheckout;
