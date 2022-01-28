import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
export function MovieList() {
  const [movies, setMovieList] = useState([]);
  const getmovies = () => {
    fetch("https://61f2943a2219930017f50735.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getmovies, []);
  const deleteMovie = (id) => {
    fetch(`https://61f2943a2219930017f50735.mockapi.io/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getmovies());
  };
  const history = useHistory();

  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary, trailer, id }, index) => (
        <Movie
          key={id}
          deleteButton={
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => deleteMovie(id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="delete"
              size="medium"
              onClick={() => history.push(`/movies/edit/${id}`)}
            >
              <EditIcon />
            </IconButton>
          }
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          trailer={trailer}
        />
      ))}
    </div>
  );
}
