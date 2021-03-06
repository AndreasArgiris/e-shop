import React from "react";
//icons
import { IoClose } from "react-icons/io5";
//router redirect
import { useHistory } from "react-router-dom";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//component
import BasketProduct from "./BasketProduct.js";
//currency
import Subtotal from "./SubTotal.js";
//animations
import { BasketAnimation } from "../animations/BasketAnimation.js";

const Basket = ({ openBasket, setOpenBasket }) => {
  ///we extract from context
  const [{ basket }] = useStateValue();
  const history = useHistory();

  const BasketHandler = () => {
    setOpenBasket(!openBasket);
  };

  return (
    <>
      {!openBasket ? (
        <motion.div
          className="basket"
          variants={BasketAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span onClick={BasketHandler}>
            <IoClose className="basket-close" />
          </span>
          <div className="basket-container">
            <h1>BASKET</h1>
            <div className="basket-container_items">
              {basket.length ? (
                basket.map((item) => {
                  return (
                    <BasketProduct
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      img={item.image}
                      key={item.id}
                      quantity={item.quantity}
                    />
                  );
                })
              ) : (
                <h5>No items added in basket.</h5>
              )}
            </div>
            {basket.length ? (
              <div className="basket-container_price">
                <h4>
                  {getItemsTotal(basket)}
                  {getItemsTotal(basket) > 1 ? " items " : " item "}
                </h4>
                <h3>total</h3>
                <Subtotal />
              </div>
            ) : null}
            {basket.length ? (
              <span
                className="basket-container_button"
                onClick={() => {
                  history.push("/checkout");
                  setOpenBasket(!openBasket);
                }}
              >
                CHECKOUT
              </span>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Basket;
