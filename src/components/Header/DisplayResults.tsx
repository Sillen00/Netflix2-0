import { SimpleGrid, Text } from "@mantine/core";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import movies from "../../../data/movies.json";
import { titleToSlug } from "../../pages/MovieViewPage";
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
            <Link key={index} to={`/movie/${titleToSlug(movie.title)}`}>
               <MovieCard {...movie} />
            </Link>
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
