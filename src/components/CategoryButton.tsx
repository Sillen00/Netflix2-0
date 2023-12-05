import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function CategoryButton() {
  const { movies } = useContext(MovieContext);

  const allGenres = movies.flatMap(movie => movie.genre.split(", "));

  const uniqueGenres = [...new Set(allGenres)];

  return (
    <div>
      {uniqueGenres.map(genre => (
        <div key={genre}>
          <button>{genre}</button>
        </div>
      ))}
    </div>
  );
}

export default CategoryButton;
