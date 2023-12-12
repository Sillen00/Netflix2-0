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

    const trendingMovies = movies.filter(movie => movie.isTrending);
    setTrending(trendingMovies.slice(0, numOfTrending));

    const nonTrendingMovies = movies.filter(movie => !movie.isTrending);
    const shuffledNonTrendingMovies = [...nonTrendingMovies].sort(() => 0.5 - Math.random());
    setRecommended(shuffledNonTrendingMovies.slice(0, numOfRecommended));
  }, [movies]);

  return (
    <div>
      <MediaSection movies={movies} />
      <MovieCarousel movies={trending} heading={"Trending"} />
      <MovieCarousel movies={recommended} heading={"Recommended for you"} />
    </div>
  );
}

export default StartPage;
