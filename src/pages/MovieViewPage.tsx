import { useContext } from "react";
import { useParams } from "react-router-dom";
import { titleToSlug } from "../components/MovieCard/MovieCard";
import MovieView from "../components/MovieView/MovieView";
import { MovieContext } from "../contexts/MovieContext";

function MovieViewPage() {
  const { movies } = useContext(MovieContext);
  const { slug } = useParams<{ slug: string }>(); // Get the title from URL

  const movie = slug ? movies.find(m => titleToSlug(m.title) === slug) : undefined;

  console.log(movie);
  return (
    <div>
      <h1>MovieViewPage</h1> {movie ? <MovieView movie={movie} /> : <h3>Movie not found</h3>}
    </div>
  );
}

export default MovieViewPage;
