import { Button, Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { StyledButton, StyledButtonContainer, StyledSelect } from "./CategoryButton.style";

interface CategoryButtonProps {
  setSelectedGenre: (genre: string | null) => void;
}

function CategoryButton({ setSelectedGenre }: CategoryButtonProps) {
  const { movies } = useContext(MovieContext);
  const isSmallScreen = useMediaQuery("(max-width: 1210px)");

  const allGenres = movies.flatMap(movie => movie.genre.split(", "));
  const uniqueGenres = [...new Set(allGenres)];

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <StyledButtonContainer>
      {isSmallScreen ? (
        <StyledSelect>
          <Select
            label='Select Genre'
            placeholder='Select Genre'
            data={uniqueGenres}
            onChange={value => handleGenreClick(value as string)}
          />
        </StyledSelect>
      ) : (
        uniqueGenres.map(genre => (
          <div key={genre}>
            <StyledButton>
              <Button onClick={() => handleGenreClick(genre)}>{genre}</Button>
            </StyledButton>
          </div>
        ))
      )}
    </StyledButtonContainer>
  );
}

export default CategoryButton;
