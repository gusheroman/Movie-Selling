import React, { useState, useEffect } from "react";
import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./components/Checkout";
import { makeStyles } from "@material-ui/core";

const getMovieInBasket = () => {
  let list = localStorage.getItem("cartItems");
  if (list) {
    return JSON.parse(localStorage.getItem("cartItems"));
  } else {
    return [];
  }
};

function App() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState(getMovieInBasket());

  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const removeFromStorage = () => {
    try {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromStorageSpecific = (id) => {
    try {
      const arr = cartItems.filter((item) => item.id !== id);
      localStorage.removeItem("cartItems");
      setCartItems(arr);
    } catch (error) {
      console.log(error);
    }
  };
  

  const addToCart = (items) => {
    if (cartItems.indexOf(items) !== -1 ) return;
    console.log(items)
    setCartItems([...cartItems, items]);
  };

  return (
    <>
      <Navbar cartItems={cartItems.length} />
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems}
                removeFromStorage={removeFromStorage}
                removeFromStorageSpecific={removeFromStorageSpecific}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}
const useStyles = makeStyles({
  root: {
    padding: "72px 56px 0px 56px",
    backgroundColor: "#100F0F",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});
export default App;
