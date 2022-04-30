import React from "react";
import { useHistory } from "react-router-dom";
//data
import products from "../products-data.js";
import hoverShape from "../images/icons/hover shape.svg";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
import nature from "../images/icons/nature.svg";

const Products1 = () => {
  const history = useHistory();
  return (
    <div className="products-section">
      <div className="products-section_header">
        <h1>SUMMER2021</h1>
        <h2>collection</h2>
      </div>
      <div className="products-section_content">
        {products
          .filter((filteredProduct) => filteredProduct.collection === 2021)
          .map((product) => {
            return (
              <div key={product.id} className="products-section_content-item">
                <motion.img
                  src={product.image1}
                  className="product-image"
                  alt={product.name}
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
                />
                <div className="text-wrapper">
                  <h3>{product.productCode}</h3>
                </div>
              </div>
            );
          })}
      </div>
      <img className="nature-banner" src={nature} alt="nature" />
    </div>
  );
};

export default Products1;
