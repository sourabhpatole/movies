import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function MovieDetail({ movies }) {
  console.log(movies);
  const { id } = useParams();
  const history = useHistory();
  const movie = movies[id];
  console.log(movie);
  return (
    <div className="container">
      <h3 className="movie-name">{movie.name}</h3>
      <div>
        <iframe
          width="876"
          height="364"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container">⭐{movie.rating}</div>

      <p>{movie.summary}</p>
      <Button
        variant="outlined"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        onClick={() => history.goForward()}
        startIcon={<ArrowForwardIcon />}
      >
        Forward
      </Button>
    </div>
    // {/* <h1>helo </h1> */}
  );
}
