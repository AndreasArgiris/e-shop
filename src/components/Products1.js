import React from "react";
import { useHistory } from "react-router-dom";
//data
import products from "../products-data.js";
import hoverShape from "../images/icons/hover shape.svg";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
import nature from "../images/icons/nature.svg";
//animations
import {
  ProductsWrapperAnimation,
  ProductsContainerAnimation,
  ProductsContainerAnimation2,
  ProductAnimation,
  ProductAnimation2,
  SvgAnimation,
} from "../animations/ProductsAnimation.js";

const Products1 = () => {
  const history = useHistory();
  return (
    <>
      <motion.div
        className="products-section"
        variants={ProductsContainerAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="products-section_header"
          variants={ProductAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1>SUMMER2021</h1>
          <h2>collection</h2>
        </motion.div>
        <motion.div
          className="products-section_content"
          variants={ProductsContainerAnimation2}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {products
            .filter((filteredProduct) => filteredProduct.collection === 2021)
            .map((product) => {
              return (
                <motion.div
                  key={product.id}
                  className="products-section_content-item"
                  variants={ProductAnimation2}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.img
                    src={product.image1}
                    className="product-image"
                    alt={product.name}
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    onClick={() => {
                      history.push(`/product/${product.id}`);
                    }}
                  />
                  <img
                    src={hoverShape}
                    className="hover-shape"
                    alt="hover shape"
                    loading="lazy"
                  />
                  <div className="text-wrapper">
                    <h3>{product.productCode}</h3>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>
        <motion.img
          className="nature-banner"
          src={nature}
          alt="nature"
          variants={SvgAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </motion.div>
      <motion.div
        className="products-wrapper"
        variants={ProductsWrapperAnimation}
        animate="animate"
      ></motion.div>
    </>
  );
};

export default Products1;
