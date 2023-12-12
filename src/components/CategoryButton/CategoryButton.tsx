import { Box, Button, Select } from "@mantine/core";
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

  // Get all the genres from the movies array. Split the string into an array and flatten it.
  // Then get the unique values from the array.
  const allGenres = movies.flatMap(movie => movie.genre.split(", "));
  const uniqueGenres = [...new Set(allGenres)];

  // Click sets the selected genre
  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <StyledCategoryButton>
      {/* If the screen is small, show the select component, otherwise show the buttons */}
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
          <Box key={genre}>
            <Button onClick={() => handleGenreClick(genre)} data-testid={`${genre}-button`}>
              {genre}
            </Button>
          </Box>
        ))
      )}
    </StyledCategoryButton>
  );
}

export default CategoryButton;
