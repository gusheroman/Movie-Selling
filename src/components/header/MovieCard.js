import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.title}>
          <span>{title}</span>
        </div>
        <img src={API_IMG + poster_path} className={classes.image}></img>
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
});
export default MovieCard;
