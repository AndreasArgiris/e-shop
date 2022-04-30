import React from "react";
//icon
import basketIcon from "../images/icons/basket-icon.svg";
//detect device
import { isMobile } from "react-device-detect";
//context
import { useStateValue } from "../context/StateProvider.js";
import { getItemsTotal } from "../context/reducer";

const Nav = ({ openBasket, setOpenBasket }) => {
  const [{ basket }] = useStateValue();
  const BasketHandler = () => {
    if (isMobile) {
      console.log("On mouse enter event is not available in mobile.");
    } else setOpenBasket(!openBasket);
  };
  return (
    <div className="basket-icon">
      <img onMouseEnter={BasketHandler} src={basketIcon} alt="basket-icon" />
      <span>{getItemsTotal(basket)}</span>
    </div>
  );
};

export default Nav;
