import { useContext, useEffect, useState } from "react";
import MediaSection from "../components/MediaSection/MediaSection";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import { Movie, MovieContext } from "../contexts/MovieContext";

function StartPage() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const { movies } = useContext(MovieContext);

  useEffect(() => {
    const numOfTrending = 10;
    const numOfRecommended = 12;

    const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
    setTrending(shuffledMovies.slice(0, numOfTrending));
    setRecommended(shuffledMovies.slice(numOfTrending, numOfTrending + numOfRecommended));
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
