import { Movie } from "./Movie";
export function MovieList({ movies, setMovieList }) {
  const deleteMovie = (id) => {
    fetch(`https://61f2943a2219930017f50735.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then((data) => data.json());
    // .then((mvs) => setMovieList(mvs));
  };
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary, trailer, id }, index) => (
        <Movie
          key={index}
          deleteButton={
            <button
              className="btn btn-danger"
              // onClick={() => {
              //   console.log("delete pressed");
              //   const deleteIndex = index;
              //   const remainingMovies = movies.filter(
              //     (mv, idx) => deleteIndex !== idx
              //   );
              //   console.log(movies, remainingMovies);
              //   setMovieList(remainingMovies);
              // }}
              onClick={() => deleteMovie(id)}
            >
              Delete
            </button>
          }
          id={index}
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
