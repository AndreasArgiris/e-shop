import React from "react";
import { useHistory } from "react-router-dom";
//data
import products from "../products-data.js";
import hoverShape from "../images/icons/hover shape.svg";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//animations
import { ScrollAnimation } from "../animations/ScrollAnimation.js";
import {
  Products2ContainerAnimation,
  Products2Animation,
} from "../animations/Products2Animation.js";

const Products = () => {
  const history = useHistory();
  //on scroll animations deconstruct
  const [element, controls] = ScrollAnimation();
  return (
    <motion.div
      className="products-section"
      ref={element}
      variants={Products2ContainerAnimation}
      animate={controls}
      initial="initial"
      exit="exit"
    >
      <motion.div
        className="products-section_header"
        variants={Products2Animation}
      >
        <h1 className="header-color">SUMMER2020</h1>
        <h2>collection</h2>
      </motion.div>
      <motion.div
        className="products-section_content"
        variants={Products2Animation}
      >
        {products
          .filter((filteredProduct) => filteredProduct.collection === 2020)
          .map((product) => {
            return (
              <div key={product.id} className="products-section_content-item">
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
              </div>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default Products;
