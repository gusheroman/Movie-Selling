import React from "react";
import Navbar from "./components/header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./components/Checkout";
import { makeStyles } from "@material-ui/core";

function App() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
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
