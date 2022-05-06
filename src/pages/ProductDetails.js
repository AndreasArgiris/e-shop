import React, { useState } from "react";
//router
import { useParams, useHistory } from "react-router-dom";
//data
import products from "../products-data.js";
//components
import Nav from "../components/Nav";
import Basket from "../components/Basket.js";
//icons
import { IoArrowBack } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { MdOutlineEco } from "react-icons/md";
//images
import wave from "../images/icons/wave.svg";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//context
import { useStateValue } from "../context/StateProvider.js";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//animations
import {
  ProductDetailsContainerAnimation,
  ProductDetailsContainerAnimation2,
  ProductDetailsAnimation,
  ProductDetailsAnimation2,
  ProductDetailsAnimation4,
} from "../animations/ProductDetailsAnimation.js";

const ProductDetails = ({ openBasket, setOpenBasket }) => {
  ///a state for image change
  const [image, setimage] = useState(true);
  ///we extract from context
  const [, dispatch] = useStateValue();
  //we extract from params the id to filter and map the array
  const { id } = useParams();
  const history = useHistory();
  return (
    <div className="product-details">
      <Nav openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <ToastContainer />
      {products
        .filter((filteredProduct) => filteredProduct.id === parseInt(id))
        .map((product) => {
          return (
            <motion.div
              key={product.id}
              className="product-details_item"
              variants={ProductDetailsContainerAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="product-details_item-photo"
                variants={ProductDetailsAnimation2}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img
                  className="main-photo"
                  src={image ? product.image1 : product.image2}
                  alt={product.name}
                  loading="lazy"
                />
                <img
                  className="thumb-photo"
                  src={image ? product.image2 : product.image1}
                  onClick={() => setimage(!image)}
                  alt={product.name}
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="product-details_item-content"
                variants={ProductDetailsContainerAnimation2}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="product-details_item-content-headers">
                  <h1>{product.name}</h1>
                  <h3>{product.color}</h3>
                  <h4>UV-400</h4>
                  <h2>{product.price}€</h2>
                </div>
                <div className="product-details_item-content-button">
                  <div className="product-details_info">
                    <p>
                      <MdOutlineEco /> Eco friendly packaging.
                    </p>
                    <p>
                      <BiWorld /> Free shipping all over EU.
                    </p>
                  </div>
                  <span
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_BASKET",
                        item: {
                          id: product.id,
                          name: product.name,
                          title: product.name,
                          image: product.image1,
                          price: product.price,
                          quantity: 1,
                        },
                      });
                    }}
                  >
                    ADD
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      <motion.span
        className="back-button"
        onClick={() => {
          history.push("/shop");
        }}
        variants={ProductDetailsAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <IoArrowBack className="back-arrow" />
      </motion.span>
      <motion.img
        className="wave"
        src={wave}
        alt="wave back"
        loading="lazy"
        variants={ProductDetailsAnimation4}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </div>
  );
};

export default ProductDetails;
