import React, { useEffect } from "react";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";
//currency
import SubtotalCheckout from "../components/SubTotalCheckout";
//icons
import { IoClose } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
//router
import { useHistory } from "react-router-dom";
//paypal
import Paypal from "../components/payment-components/Paypal.js";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//animations
import {
  CheckoutContainerAnimation,
  CheckoutItemAnimation,
  CheckoutItemAnimation2,
} from "../animations/CheckoutAnimation.js";

const CheckOut = () => {
  //we extract from  context
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  //when mount if the are no items on basket redirect to /shop
  useEffect(() => {
    if (!basket.length) {
      history.push("/shop");
    }
  }, [basket.length]);

  return (
    <section className="checkout">
      <motion.div className="checkout-container" variants={CheckoutContainerAnimation} initial="initial" animate="animate" exit="exit">
        <motion.div className="checkout-container_content" variants={CheckoutItemAnimation} initial="initial" animate="animate" exit>
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
        </motion.div>
        <motion.div className="checkout-container_price" variants={CheckoutItemAnimation} initial="initial" animate="animate"exit="exit">
          <h3>total</h3>
          <h4>
            {getItemsTotal(basket)}
            {getItemsTotal(basket) > 1 ? " items " : " item "}
          </h4>
          <SubtotalCheckout />
          <Paypal />
        </motion.div>
      </motion.div>
      <motion.span className="back-button" onClick={() => {history.push("/shop")}} variants={CheckoutItemAnimation2} initial="initial" animate="animate" exit="exit">
        <IoArrowBack className="back-color" />
      </motion.span>
    </section>
  );
};

export default CheckOut;
