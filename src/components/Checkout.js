import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Checkout = ({ cartItems,setCartItems }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const classes = useStyles();
  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Check out</h1>
      </div>

      <Paper>
        {cartItems.map((items) => (
          <>
            <div className={classes.boxContainer}>
              <img
                key={items.id}
                className={classes.image}
                src={API_IMG + items.poster_path}
                alt={items.title}
              ></img>
              <h2 className={classes.title}>{items.title}</h2>
              <Button
                color="secondary"
                variant="contained"
                onClick={()=>handleRemove(items.id)}
                style={{ marginRight: "72px" }}
              >
                Remove
              </Button>
            </div>
          </>
        ))}
      </Paper>
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    marginTop: "56px ",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
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
});
export default Checkout;
