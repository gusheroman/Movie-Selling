import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MovieCard from "./components/header/MovieCard";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/header/Navbar";
function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=f0b959cbcbffe50ac134dda60eaa7e74";
  const classes = useStyles();
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.container}>
          {movie.map((items) => (
            <MovieCard key={items.id} {...items} />
          ))}
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    float: "left",
    padding: 0,
    background: "#191919",
    border: "1px solid #333",
    boxSizing: "border-box",
    marginBottom: "4px",
  },
  root: {
    padding: "72px 56px 0px 56px",
    backgroundColor: "#100F0F",
    minHeight: "100vh",
    display: "flex",
  },
});

export default App;
