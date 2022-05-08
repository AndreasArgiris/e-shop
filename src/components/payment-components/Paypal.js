import React, { useState, useEffect, useRef } from "react";
//context
import { useStateValue } from "../../context/StateProvider";
//reducer
import { getBasketTotal } from "../../context/reducer";
import { useHistory } from "react-router-dom";

function Paypal() {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  const paypal = useRef();
  const history = useHistory();
  //we extract basket from context
  const [{ basket }, dispatch] = useStateValue();

  const handleApprove = (orderId) => {
    //if response sucess
    setPaid(true);
    dispatch({
      type: "ORDER",
      order: true,
    });
  };

  if (paid) {
    history.push("/order");
  }
  if (error) {
    alert(error);
  }

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "silver",
          layout: "horizontal",
          height: 48,
        },
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
          handleApprove(data.orderId);
        },
        onError: (err) => {
          setError(err);
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
