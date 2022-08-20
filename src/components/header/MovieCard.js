import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
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
    <div className={classes.movie}>
      <div className={classes.movieBox}>
        <div className={classes.movieTitle}>
          <span style={{ color: "white" }}>{title}</span>
        </div>
        <div className={classes.image}>
          <img src={API_IMG + poster_path}></img>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  movie: {
    position: "relative",
    width: "25%",
    float: "left",
    boxSizing: "border-box",
    padding: "4px",
  },
  movieBox: {
    position: "relative",
    width: "auto",
    height: "auto",
    background: "#242424",
    textAlign: "center",
    margin: "0",
    padding: "4px",
    border: "1px solid #444",
    borderRadius: "4px 4px 0 0",
    overflow: "hidden",
    boxSizing: "content-box",
  },
  movieTitle: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: "0",
    background: "rgba(0,0,0,.7)",
    padding: "4px",
    boxSizing: "border-box",
    marginLeft: "-4px",
  },
});
export default MovieCard;
