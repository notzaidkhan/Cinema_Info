import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from "react-stars";
import styles from './Archive.module.css'; 
import NavBar from '../NavBar/NavBar';

const ArchiveCard = ({ movie: { id, year, poster, title, type, comment, rating }, url, onDelete }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(comment, rating, year, type);
  }, [comment, rating]);

  const handleClick = (e) => {
    window.location.href = `https://www.imdb.com/title/${id}`;
  };

  const handleClose = async (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    try {
      const response = await fetch(url + `/id/${id}`, {
        method: 'DELETE',
        headers :{
          'Content-Type' : 'application/json',
        },
      });
      if(response.ok) {
        console.log("Review deleted succesfully!");
        onDelete(id);
      }
      else {
        throw new Error("Failed to delete Item!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.archiveCardContainer}>
      <div className={styles.movie} key={id} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div className={styles.year}>
          <p className={styles.span}>{year}</p>
          <p className={styles.close} onClick={handleClose}>x</p>
        </div>

        <div>
          <img src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"} alt={title} />
        </div>

        <div>
          <span>{type}</span>
          <h3>{title}</h3>
          <ReactStars
            count={5}
            size={24}
            value={rating}
            edit={false}
            color2={"#ffd700"}
            className={styles.star}
          />
        </div>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.commentDisplay}>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCard;
