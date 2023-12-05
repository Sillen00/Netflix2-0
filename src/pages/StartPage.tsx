import MovieCarousel from "../components/MovieCarousel/MovieCarousel";

function StartPage() {
  return (
    <div>
      <MovieCarousel title={"Trending"} />
      <MovieCarousel title={"Recommended for you"} />
    </div>
  );
}

export default StartPage;
