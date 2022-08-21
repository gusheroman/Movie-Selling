import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ title, poster_path }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>{title}</span>
        </div>
        <div className={classes.button}>
          <Button
            color="primary"
            variant="contained"
            style={{ height: "auto", width: "50%" }}
          >
            Add To Cart
            <ShoppingCartOutlinedIcon style={{ marginLeft: "8px" }} />
          </Button>
        </div>
        <img
          src={API_IMG + poster_path}
          alt={title}
          className={classes.image}
        ></img>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "auto",
  },
  root: {
    textAlign: "center",
    position: "relative",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      "& $title": {
        color: "yellow",
      },
      "& $button": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  title: {
    fontSize: "24px",
    color: "white",
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: "0",
    background: "rgba(0,0,0,.7)",
    padding: "4px",
    boxSizing: "border-box",
  },
  button: {
    display: "none",
    fontSize: "24px",
    color: "white",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: "0",
    background: "rgba(0,0,0,.7)",
    padding: "4px",
    boxSizing: "border-box",
  },
});
export default MovieCard;
