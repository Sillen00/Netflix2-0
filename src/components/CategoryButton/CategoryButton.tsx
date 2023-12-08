import { Button, Select } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { StyledCategoryButton } from "./CategoryButton.style";

interface CategoryButtonProps {
  setSelectedGenre: (genre: string | null) => void;
}

function CategoryButton({ setSelectedGenre }: CategoryButtonProps) {
  const { movies } = useContext(MovieContext);
  const isSmallScreen = useMediaQuery("(max-width: 1240px)");

  const allGenres = movies.flatMap(movie => movie.genre.split(", "));
  const uniqueGenres = [...new Set(allGenres)];

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <StyledCategoryButton>
      {isSmallScreen ? (
        <Select
          data-testid='select-component'
          label='Select Genre'
          placeholder='Select Genre'
          data={uniqueGenres}
          onChange={value => handleGenreClick(value as string)}
        />
      ) : (
        uniqueGenres.map(genre => (
          <div key={genre}>
            <Button onClick={() => handleGenreClick(genre)} data-testid={`${genre}-button`}>
              {genre}
            </Button>
          </div>
        ))
      )}
    </StyledCategoryButton>
  );
}

export default CategoryButton;
