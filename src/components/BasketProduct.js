import React from "react";
//icons
import { IoClose } from "react-icons/io5";
//context
import { useStateValue } from "../context/StateProvider.js";

const BasketProduct = ({ id, name, price, quantity, img }) => {
  const [, dispatch] = useStateValue();

  return (
    <div className="basket-container_item" key={id}>
      <div className="basket-container_item-info">
        <img src={img} alt={name} />
        <h4>{quantity} x</h4>
        <h2>{name}</h2>
        <h3>{price}€</h3>
        <IoClose
          className="remove-button"
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_BASKET",
              id: id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default BasketProduct;
