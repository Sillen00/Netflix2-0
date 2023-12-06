import { SimpleGrid, Text } from "@mantine/core";
import { useMemo } from "react";
import movies from "../../../data/movies.json";
import MovieCard from "../MovieCard/MovieCard";
import { StyledSearchResultDisplayContainer } from "./Header.style";

interface DisplayResultsProps {
  searchInput: string;
}

function DisplayResults({ searchInput }: DisplayResultsProps) {
  const filteredMovies = useMemo(() => {
    if (!searchInput) return [];
    return movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
  }, [searchInput]);

  return (
    <StyledSearchResultDisplayContainer>
      {filteredMovies.length > 0 ? (
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} verticalSpacing={{ base: "md", sm: "xl" }}>
          {filteredMovies.map((movie, index) => (
            <MovieCard
              key={index}
              thumbnail={movie.thumbnail}
              year={movie.year.toString()}
              rating={movie.rating}
              title={movie.title}
            />
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
