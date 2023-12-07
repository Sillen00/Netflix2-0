import { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieView from "../components/MovieView/MovieView";
import { MovieContext } from "../contexts/MovieContext";

export const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

function MovieViewPage() {
  const { movies } = useContext(MovieContext);
  const { slug } = useParams<{ slug: string }>(); // Get the title from URL

  const movie = slug ? movies.find(m => titleToSlug(m.title) === slug) : undefined;

  return <div>{movie && <MovieView movie={movie} />} </div>;
}

export default MovieViewPage;
