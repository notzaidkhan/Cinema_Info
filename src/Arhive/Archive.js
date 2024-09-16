import React, { useState, useEffect } from "react";
import ArchiveCard from "./ArchiveCard";
// import "./Archive.css";

const BACKEND_URL = "http://localhost:8080";

const Archive = () => {
  const [movies, setMovies] = useState([]);

  const handleRemovedMovie = (id) => {
    setMovies((prevList) => prevList.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(BACKEND_URL + "/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data);
        console.log(data);
        console.log("ok");
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
  
    fetchMovies();
  }, []); 
  

  return (
    <div>
      <div className="app">
        <h1 style={{ color: "#cc090c" }}>Zaid's Den!</h1>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <ArchiveCard key={movie.id} movie={movie} url={BACKEND_URL} onDelete = {handleRemovedMovie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
