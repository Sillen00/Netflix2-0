import { Button } from "@mantine/core";
import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { StyledButton, StyledButtonContainer } from "./CategoryButton.style";

interface CategoryButtonProps {
  setSelectedGenre: (genre: string | null) => void;
}

function CategoryButton({ setSelectedGenre }: CategoryButtonProps) {
  const { movies } = useContext(MovieContext);

  const allGenres = movies.flatMap(movie => movie.genre.split(", "));

  const uniqueGenres = [...new Set(allGenres)];

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <StyledButtonContainer>
      {uniqueGenres.map(genre => (
        <div key={genre}>
          <StyledButton>
            <Button onClick={() => handleGenreClick(genre)}>{genre}</Button>
          </StyledButton>
        </div>
      ))}
    </StyledButtonContainer>
  );
}

export default CategoryButton;
