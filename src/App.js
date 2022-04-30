import React, { useState } from "react";
//styles
import "./styles/Base.scss";
//routing
import { Switch, Route, useLocation } from "react-router";
//wrap the application with router
//animate presence for animations on paths
import { AnimatePresence } from "framer-motion/dist/framer-motion";
//components
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CheckOut from "./pages/CheckOut";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const location = useLocation();
  //state for basket modal toggle
  const [openBasket, setOpenBasket] = useState(true);
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop" exact>
          <Shop openBasket={openBasket} setOpenBasket={setOpenBasket} />
        </Route>
        <Route path="/checkout" exact>
          <CheckOut />
        </Route>
        <Route path="/product/:id" exact>
          <ProductDetails
            openBasket={openBasket}
            setOpenBasket={setOpenBasket}
          />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
