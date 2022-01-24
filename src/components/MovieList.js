import { Movie } from "./Movie";
export function MovieList({ movies, setMovieList }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary, trailer }, index) => (
        <Movie
          deleteButton={
            <button
              className="btn btn-danger"
              onClick={() => {
                console.log("delete pressed");
                const deleteIndex = index;
                const remainingMovies = movies.filter(
                  (mv, idx) => deleteIndex !== idx
                );
                console.log(movies, remainingMovies);
                setMovieList(remainingMovies);
              }}
            >
              Delete
            </button>
          }
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
