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
        <SimpleGrid cols={{ base: 2, sm: 3, lg: 5 }} verticalSpacing={{ base: "md", sm: "xl" }}>
          {filteredMovies.map((movie, index) => (
            <div key={index}>
              <MovieCard {...movie} />
            </div>
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
