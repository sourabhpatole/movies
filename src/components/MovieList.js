import { Movie } from "./Movie";
export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary }) => (
        <Movie
          deleteButton={
            <button
              onClick={() => {
                console.log("delete");
              }}
            >
              Delete
            </button>
          }
          key={name}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
