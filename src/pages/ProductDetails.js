import React from "react";
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
//context
import { useStateValue } from "../context/StateProvider.js";

const ProductDetails = ({ openBasket, setOpenBasket }) => {
  const [, dispatch] = useStateValue();
  const { id } = useParams();
  const history = useHistory();
  return (
    <div className="product-details">
      <Nav openBasket={openBasket} setOpenBasket={setOpenBasket} />
      <Basket openBasket={openBasket} setOpenBasket={setOpenBasket} />
      {products
        .filter((filteredProduct) => filteredProduct.id === parseInt(id))
        .map((product) => {
          return (
            <div key={product.id} className="product-details_item">
              <div className="product-details_item-photo">
                <img src={product.image1} alt={product.name} />
              </div>
              <div className="product-details_item-content">
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
              </div>
            </div>
          );
        })}
      <span
        className="back-button"
        onClick={() => {
          history.push("/shop");
        }}
      >
        <IoArrowBack className="back-arrow" />
      </span>
      <img className="wave" src={wave} alt="wave back" />
    </div>
  );
};

export default ProductDetails;
