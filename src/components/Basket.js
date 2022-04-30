import React from "react";
//icons
import { IoClose } from "react-icons/io5";
//router redirect
import { useHistory } from "react-router-dom";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";
//device detect
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion/dist/framer-motion";
//component
import BasketProduct from "./BasketProduct.js";
//currency
import Subtotal from "./SubTotal.js";

const Basket = ({ openBasket, setOpenBasket }) => {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  const BasketHandler = () => {
    if (isMobile) {
      console.log("On mouse enter event is not available in mobile.");
    } else setOpenBasket(!openBasket);
  };

  return (
    <>
      {!openBasket ? (
        <motion.div className="basket" onMouseLeave={BasketHandler}>
          <span onClick={() => setOpenBasket(!openBasket)}>
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
