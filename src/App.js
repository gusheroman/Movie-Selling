import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import MovieCard from "./components/header/MovieCard";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/header/Navbar";
import Searchbar from "./components/Searchbar";
function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=f0b959cbcbffe50ac134dda60eaa7e74";
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=f0b959cbcbffe50ac134dda60eaa7e74&query";
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f0b959cbcbffe50ac134dda60eaa7e74&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.container}>
          <Searchbar
            searchMovie={searchMovie}
            query={query}
            onChangeHandler={onChangeHandler}
          />
          {movie.length > 0 ? (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {movie.map((items) => (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  style={{ padding: "56px" }}
                  key={items.id}
                >
                  <MovieCard key={items.id} {...items} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              <div className={classes.notFoundContainer}>
                <h1>Not Found !!!</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles({
  notFoundContainer: {
    display: "flex",
    color: "white",
    justifyContent: "center",
  },
  root: {
    padding: "72px 56px 0px 56px",
    backgroundColor: "#100F0F",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});

export default App;
