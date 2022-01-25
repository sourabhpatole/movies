import { Counter } from "./Counter";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Movie({
  name,
  poster,
  rating,
  summary,
  trailer,
  deleteButton,
  id,
}) {
  const [show, setShow] = useState(false);
  const history = useHistory();
  // const descriptionStyle = { display: show ? "block" : "none" };
  const styles = { color: rating >= 8.6 ? "teal" : "crimson" };
  return (
    <div className="container">
      <img src={poster} alt={name} className="movie-poster" />
      <h3 className="movie-name">{name}</h3>
      <div className="container">
        <Counter />
        <p style={styles} className="movie-rating">
          ⭐{rating}
        </p>
      </div>
      <button
        className="btn btn-primary mx-3"
        onClick={() => history.push(`/movies/${id}`)}
      >
        info
      </button>
      <button className="btn btn-primary mx-3" onClick={() => setShow(!show)}>
        Toggle Description
      </button>
      {/* conditional styling */}
      {/* <p style={descriptionStyle} className="movie-summery">
        {summary}
      </p> */}
      {/* conditional rendering */}
      {show ? <p className="movie-summery ">{summary}</p> : ""}
      {deleteButton}
    </div>
  );
}
