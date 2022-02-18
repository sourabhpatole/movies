import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { API } from "../global";

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovieList] = useState([]);
  const getmovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getmovie, [id]);
  const history = useHistory();
  // const movie = movies[id];
  // console.log(movie);
  return (
    <div className="container">
      <h3 className="movie-name ">{movie.name}</h3>
      <div className="container my-2">
        <iframe
          width="100%"
          height="564"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="container">{movie.rating}</div>

      <p>{movie.summary}</p>
      <Button
        variant="outlined"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
    // {/* <h1>helo </h1> */}
  );
}
