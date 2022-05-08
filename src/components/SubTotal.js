import React from "react";
//currency li
import CurrencyFormat from "react-currency-format";
//context
import { useStateValue } from "../context/StateProvider";
//reducer
import { getBasketTotal } from "../context/reducer";

function Subtotal() {
  ///we extract from context
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <h2>{value}</h2>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
        />
      </div>
    </>
  );
}

export default Subtotal;
