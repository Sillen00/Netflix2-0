import MovieCard from "../components/MovieCard/MovieCard";

function StartPage() {
  return (
    <div>
      <h1>StartPage</h1>
      <MovieCard
        thumbnail='https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg'
        year='2019'
        age='15'
      />
    </div>
  );
}

export default StartPage;
