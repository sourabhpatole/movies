import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { API } from "../global";

export function MovieList() {
  const [movies, setMovieList] = useState([]);
  const getmovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };
  useEffect(getmovies, []);
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then(() => getmovies());
  };
  const history = useHistory();

  return (
    <div className="movie-list">
      {movies.map(
        ({ name, poster, rating, summary, trailer, id, _id }, index) => (
          <Movie
            key={_id}
            deleteButton={
              <IconButton
                aria-label="delete"
                size="medium"
                onClick={() => deleteMovie(_id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="delete"
                size="medium"
                onClick={() => history.push(`/movies/edit/${_id}`)}
              >
                <EditIcon />
              </IconButton>
            }
            id={_id}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            trailer={trailer}
          />
        )
      )}
    </div>
  );
}
