import React, { useEffect } from "react";
//router
import { useHistory } from "react-router-dom";
//component
import OrderConfirm from "../components/OrderConfirm";
//context
import { useStateValue } from "../context/StateProvider";

function ProtectedRoute() {
  const history = useHistory();
  const [{ order }] = useStateValue();
  useEffect(() => {
    !order && history.push("./shop");
  }, []);
  return order && <OrderConfirm />;
}

export default ProtectedRoute;
