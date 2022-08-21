import React, { useState } from "react";
import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./components/Checkout";
import { makeStyles } from "@material-ui/core";

function App() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (items) => {
    if (cartItems.indexOf(items) !== -1) return;
    setCartItems([...cartItems, items]);
    console.log(cartItems);
  };

  return (
    <>
      <Navbar cartItems={cartItems.length} />
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />}
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
