import { Box } from "@mantine/core";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MovieView from "../components/MovieView/MovieView";
import { MovieContext } from "../contexts/MovieContext";
import NotFoundPage from "./NotFoundPage";

export const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

function MovieViewPage() {
  const { movies } = useContext(MovieContext);
  const { slug } = useParams<{ slug: string }>();

  const movie = slug ? movies.find(m => titleToSlug(m.title) === slug) : null;

  if (!movie) {
    // If no movie is found, show the NotFoundPage component
    return <NotFoundPage movieViewPage />;
  }

  return (
    <Box>
      <MovieView {...movie} />
    </Box>
  );
}

export default MovieViewPage;
