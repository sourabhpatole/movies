import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Addmovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const admovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // setMovieList([...movieList, newMovie]);

    fetch(`https://61f2943a2219930017f50735.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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
      <button className="btn btn-primary my-3" onClick={admovie}>
        Add Movie
      </button>
    </div>
  );
}
