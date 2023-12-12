import { Box, SimpleGrid, Text } from "@mantine/core";
import { useMemo } from "react";
import movies from "../../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
import { StyledSearchResultDisplayContainer } from "./Header.style";

interface DisplayResultsProps {
  searchInput: string;
}

// If the search input is empty, return an empty array (no results)
function DisplayResults({ searchInput }: DisplayResultsProps) {
  const filteredMovies = useMemo(() => {
    if (!searchInput) return [];
    return movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
  }, [searchInput]);

  return (
    <StyledSearchResultDisplayContainer>
      {/*If the search input does not match any movie title, show a message, otherwise render the movie cards*/}
      {filteredMovies.length > 0 ? (
        <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} verticalSpacing={{ base: "md", sm: "xl" }}>
          {filteredMovies.map((movie, index) => (
            <Box key={index}>
              <MovieCard {...movie} />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text className='noresults-text' c='white' size='xl'>
          {`Your search for "${searchInput}" did not have any matches.`}
        </Text>
      )}
    </StyledSearchResultDisplayContainer>
  );
}

export default DisplayResults;
