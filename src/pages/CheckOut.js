import React, { useEffect } from "react";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";
//currency
import Subtotal from "../components/SubTotal.js";
//icons
import { IoClose } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const CheckOut = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    if (!basket.length) {
      history.push("/shop");
    }
  }, [basket.length]);

  return (
    <section className="checkout">
      <div className="checkout-container">
        <div className="checkout-container_content">
          <h1>checkout</h1>
          <div className="checkout-container_items">
            {basket.map((item) => {
              return (
                <div className="checkout-container_item" key={item.id}>
                  <img src={item.image} alt="product img" />
                  <h4>{item.quantity} x</h4>
                  <h2>{item.name}</h2>
                  <h3>{item.price}€</h3>
                  <IoClose
                    className="remove-button"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_BASKET",
                        id: item.id,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="checkout-container_price">
          <h3>total</h3>
          <h4>
            {getItemsTotal(basket)}
            {getItemsTotal(basket) > 1 ? " items " : " item "}
          </h4>
          <Subtotal />
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
