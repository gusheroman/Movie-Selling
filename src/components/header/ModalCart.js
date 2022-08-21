import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const ModalCart = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2>Text in a modal</h2>
    </div>
  );
  return (
    <div>
      <ShoppingCartIcon
        style={{ cursor: "pointer" }}
        onClick={handleOpenModal}
      />
      <Modal className={classes.modal} open={open} onClose={handleCloseModal}>
        {body}
      </Modal>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    background: "white",
    padding: theme.spacing(2, 4, 3),
    border: "2px solid #000",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default ModalCart;
