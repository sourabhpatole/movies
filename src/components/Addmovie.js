import React from "react";
import { useState } from "react";

export function Addmovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
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
      <button
        className="btn btn-primary my-3"
        onClick={() => {
          // console.log({
          //   name: name,
          //   poster: poster,
          //   rating: rating,
          //   summary: summary,
          //   trailer: trailer,
          // });
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          setMovieList([...movieList, newMovie]);
        }}
      >
        Add Movie
      </button>
    </div>
  );
}
