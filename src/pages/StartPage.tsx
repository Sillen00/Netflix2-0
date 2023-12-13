import { Box } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import MediaSection from "../components/MediaSection/MediaSection";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import { MovieContext } from "../contexts/MovieContext";
import { Movie } from "../utils/dataTypes";

function StartPage() {
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const [trending, setTrending] = useState<Movie[]>([]);
  const { movies } = useContext(MovieContext);

  useEffect(() => {
    const numOfTrending = 7;
    const numOfRecommended = 12;

    // Filter out the trending movies and set them in state.
    // This makes sure that the movies do not appear in both carousels.
    const trendingMovies = movies.filter(movie => movie.isTrending);
    setTrending(trendingMovies.slice(0, numOfTrending));
    // Filter out the non-trending movies
    const nonTrendingMovies = movies.filter(movie => !movie.isTrending);
    // Shuffle them and set them in state
    const shuffledNonTrendingMovies = [...nonTrendingMovies].sort(() => 0.5 - Math.random());
    setRecommended(shuffledNonTrendingMovies.slice(0, numOfRecommended));
  }, [movies]);

  return (
    <Box>
      <MediaSection movies={movies} />
      <MovieCarousel movies={trending} heading={"Trending"} />
      <MovieCarousel movies={recommended} heading={"Recommended for you"} />
    </Box>
  );
}

export default StartPage;
