import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
const Navbar = (props) => {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div className={classes.root}>
      <h1
        style={{ cursor: "pointer" }}
        onClick={() => (window.location.href = "/")}
      >
        Movie
      </h1>
      <Badge badgeContent={props.cartItems} color="primary">
        <ShoppingCartIcon
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/checkout`)}
        />
      </Badge>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    background: "#F1F1F1",
    width: "100vw",
    zIndex: 100,
    height: "72px",
    top: "0",
    position: "fixed",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "0px 74px 0px 56px",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default Navbar;
