import React, { useEffect } from "react";
//components
import Basket from "../components/Basket.js";
import Products1 from "../components/Products1";
import Products2 from "../components/Products2";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
const Shop = ({ openBasket, setOpenBasket }) => {
  //when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  //when component mounts for 1.5 deactivate scroll
  useEffect(() => {
    document.body.classList.add("no-scroll");
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 1500);
  }, []);

  return (
    <motion.div className="shop-page">
      <Nav openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Products1 />
      <Products2 />
      <Contact />
    </motion.div>
  );
};

export default Shop;
