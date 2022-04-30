import React from "react";
import Products1 from "../components/Products1";
import Products2 from "../components/Products2";
import Nav from "../components/Nav";
//components
import Basket from "../components/Basket.js";
const Shop = ({ openBasket, setOpenBasket }) => {
  return (
    <div className="shop-page">
      <Nav openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Products1 />
      <Products2 />
    </div>
  );
};

export default Shop;
