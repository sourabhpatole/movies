import { Counter } from "./Counter";
import { useState } from "react";

export function Movie({
  name,
  poster,
  rating,
  summary,
  trailer,
  deleteButton,
}) {
  const [show, setShow] = useState(false);
  // const descriptionStyle = { display: show ? "block" : "none" };
  const styles = { color: rating >= 8.6 ? "teal" : "crimson" };
  return (
    <div className="container ">
      <img src={poster} alt={name} className="movie-poster" />
      <h3 className="movie-name">{name}</h3>
      <div className="movie-specs my-3">
        <Counter />
        <p style={styles} className="movie-rating">
          ⭐{rating}
        </p>
      </div>
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
      <span> {trailer}</span>
    </div>
  );
}
