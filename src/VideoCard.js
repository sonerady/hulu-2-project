import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="h1"
        TextTruncate="..."
        text={movie.title || movie.original_name}
      />
      <TextTruncate
        line={1}
        element="p"
        textTruncateChild={
          <a style={{ color: "#c000ff" }} href="#">
            Read on
          </a>
        }
        text={movie.overview}
      />
      <p style={{ display: "none" }} className="videoCard__stats">
        {movie.release_date || movie.first_air_date}
      </p>
    </div>
  );
});

export default VideoCard;
