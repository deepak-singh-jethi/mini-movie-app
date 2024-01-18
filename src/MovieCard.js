import React from "react";

const MovieCard = function ({ cardDetail, uniqueKey }) {
  const { title, actor, genre, director, img } = cardDetail;
  return (
    <div className="movieCard" key={uniqueKey}>
      <div className="movieImg">
        <img src={img} />
      </div>
      <div className="movieInfo">
        <h2>{title}</h2>
        <p>
          <span>Actor: </span> {actor}
        </p>
        <p>
          <span>Director: </span> {director}
        </p>
        <p>
          <span>Genere: </span> {genre}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
