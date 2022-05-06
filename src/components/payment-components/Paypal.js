import React, { useEffect, useRef } from "react";
//context
import { useStateValue } from "../../context/StateProvider";
//reducer
import { getBasketTotal } from "../../context/reducer";

function Paypal() {
  const paypal = useRef();
  //we extract basket from context
  const [{ basket }] = useStateValue();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Seece order",
                amount: {
                  currency_code: "EUR",
                  value: getBasketTotal(basket),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div className="paypal-container">
      <span className="paylpal" ref={paypal}></span>
    </div>
  );
}

export default Paypal;
