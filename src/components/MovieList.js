import { Movie } from "./Movie";
export function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary, trailer }) => (
        <Movie
          key={name}
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
