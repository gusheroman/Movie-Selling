import React,{useEffect, useState} from "react";
import MovieCard from "./MovieCard";
function App() {
 const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f0b959cbcbffe50ac134dda60eaa7e74";
 const [movie, setMovies]=useState([]);

 useEffect(()=>{
  fetch(API_URL)
  .then((res)=>res.json())
  .then(data=>{
    console.log(data)
    setMovies(data.results);
  })
 },[]);
  return (
    <div className="App">
      {movie.map((items)=>
      <MovieCard key={items.id} {...items} />
      )}
    </div>
  );
}

export default App;
