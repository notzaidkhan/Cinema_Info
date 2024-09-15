import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import ReactStars from "react-stars";
import "./ArchiveInput.css";

const BACKEND_URL = "http://localhost:8080/";

const ArchiveInput = () => {
  const { state: { imdbID, Year, Poster, Title, Type } = {} } = useLocation();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Clicked")
    const movieData = {
      id: imdbID, 
      title: Title,
      url: `https://www.imdb.com/title/${imdbID}`,
      type: Type,
      year: Year,
      poster: Poster,
      comment: comment,
      rating: rating,
    };

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        console.log("Movie saved successfully!");
      } else {
        console.error("Failed to save the movie.");
      }
    } catch (error) {
      console.error("Error while saving the movie:", error);
    }
      navigate('/archive');
  };

  return (
    <div className="archive-input-container">

      <div className="movie-details">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} className="poster-img" />
        <div>
          <h2>{Title}</h2>
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="6"
        />

        <div className="rating-section">
          <h3>Rate the {Type[0].toUpperCase() + Type.slice(1, Type.length )}:</h3>
          <ReactStars
            count={5}
            onChange={handleRatingChange}
            size={40}
            color2={"#ffd700"}
            value={rating}
          />
        </div>

        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default ArchiveInput;
