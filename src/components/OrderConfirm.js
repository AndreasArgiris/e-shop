import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaHome } from "react-icons/fa";

function OrderConfirm() {

  return (
    <div className="order-confirm">
      <h1>Thank you for you purchase.</h1>
      <h2>We will inform you via e-mail for confirmation.</h2>
      <span>
        <h3>Redirect to shop</h3>
        <Link to={"/shop"}>
          <FaHome className="back-to" />
        </Link>
      </span>
    </div>
  );
}

export default OrderConfirm;
