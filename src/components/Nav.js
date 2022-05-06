import React from "react";
//icon
import basketIcon from "../images/icons/basket-icon.svg";
//detect device
import { isMobile } from "react-device-detect";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//animations
import { NavAnimation } from "../animations/NavAnimation";

const Nav = ({ openBasket, setOpenBasket }) => {
  ///we extract from context
  const [{ basket }] = useStateValue();
  const BasketHandler = () => {
    if (isMobile) {
      console.log("On mouse enter event is not available in mobile.");
    } else setOpenBasket(!openBasket);
  };
  return (
    <motion.div
      className="basket-icon"
      variants={NavAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <img onMouseEnter={BasketHandler} src={basketIcon} alt="basket-icon" />
      <span>{getItemsTotal(basket)}</span>
    </motion.div>
  );
};

export default Nav;
