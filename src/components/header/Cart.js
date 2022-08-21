import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
const ModalCart = () => {
  let navigate = useNavigate();

  return (
    <div>
      <ShoppingCartIcon
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/checkout`)}
      />
    </div>
  );
};

export default ModalCart;
