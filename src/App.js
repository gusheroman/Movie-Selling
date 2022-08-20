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
          <Grid container justifyContent="center">
            {movie.map((items) => (
              <Grid item xs={6} sm={3}>
                <MovieCard key={items.id} {...items} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  container: {
    padding: "72px 56px 0px 56px",
  },
  root: {
    backgroundColor: "#100F0F",
    minHeight: "100vh",
    display: "flex",
  },
});

export default App;
