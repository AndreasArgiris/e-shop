import React, { useState, useEffect } from "react";
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
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  //state for basket modal toggle
  const [openBasket, setOpenBasket] = useState(true);
  //load all our application
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);

  return (
    <>
      {!load ? (
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
            <Route path="/order" exact>
              <ProtectedRoute />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
}

export default App;
