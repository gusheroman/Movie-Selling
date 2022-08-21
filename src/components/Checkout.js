import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

const Checkout = ({
  cartItems,
  setCartItems,
  removeFromStorage,
  removeFromStorageSpecific,
}) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = (id) => {
    removeFromStorageSpecific(id);
  };
  const handlerClearBasket = () => {
    setCartItems([]);
    removeFromStorage();
  };
  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <div>
            <div className={classes.container}>
              <div className={classes.header}>
                <h1>Check out</h1>
              </div>

              <Paper>
                {cartItems.map((items) => (
                  <>
                    <div key={items.id} className={classes.boxContainer}>
                      <img
                        className={classes.image}
                        src={API_IMG + items.poster_path}
                        alt={items.title}
                      ></img>
                      <h2 className={classes.title}>{items.title}</h2>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleRemove(items.id)}
                        style={{ marginRight: "72px" }}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                ))}
              </Paper>
            </div>
            <div className={classes.buttonGroup}>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: "24px" }}
                onClick={handleOpen}
              >
                Check Out
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => handlerClearBasket()}
              >
                Clear item
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.container}>
            <div className={classes.header}>
              <h1>No items in basket</h1>
            </div>
          </div>
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modalContainer}
      >
        <div className={classes.modalContainer}>
          <div className={classes.paper}>
            <h2>Payment</h2>
            <p>
              Please transfer money to 034-xxx-xxx Bank: SCB 
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    marginTop: "56px ",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    color: "white",
  },
  boxContainer: {
    width: "100vh",
    display: "flex",
    alignItems: "center",
    borderBottom: "12px solid black",
    justifyContent: "space-between",
  },
  image: {
    display: "flex",
    width: "20%",
  },
  button: {
    marginRight: "72px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "14px",
    marginBottom: "36px",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    width: "45%",
    backgroundColor: "white",
    border: "2px solid #000",
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Checkout;
