import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {API} from "../global";

export function EditMovies() {
  const { id } = useParams();
  const [movie, setMovieList] = useState(null);
  const getmovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getmovie, [id]);
  console.log(movie);
  return movie ? <UpadateMovies movie={movie} /> : "";
}
function UpadateMovies({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // setMovieList([...movieList, newMovie]);

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => history.push("/movies"));
  };

  const history = useHistory();
  return (
    <div>
      <input
        className="form-label mx-3 my-4"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a name"
      />
      <input
        className="form-label mx-3 my-4"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter a poster"
      />
      <input
        className="form-label mx-3 my-4"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter a rating"
      />
      <input
        className="form-label mx-3 my-4"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter a summery"
      />
      <input
        className="form-label mx-3 my-4"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder="Enter a trailer"
      />
      <button className="btn btn-warning my-3" onClick={editMovie}>
        Save Movie
      </button>
    </div>
  );
}
