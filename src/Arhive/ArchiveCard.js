import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from "react-stars";
import styles from './Archive.module.css'; // Importing Archive.module.css

const ArchiveCard = ({ movie: { id, year, poster, title, type, comment, rating } }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(comment, rating, year, type);
  }, [comment, rating]);

  const handleClick = () => {
    window.location.href = `https://www.imdb.com/title/${id}`;
  };

  return (
    <div className={styles.archiveCardContainer}>
      <div className={styles.movie} key={id} onClick={handleClick} style={{ cursor: 'pointer' }}>
        <div className={styles.year}>
          <p>{year}</p>
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
      {/* <div className={styles.commentContainer}>
        <div className={styles.commentDisplay}>
          <p>{comment}</p>
        </div>
      </div> */}
    </div>
  );
};

export default ArchiveCard;
