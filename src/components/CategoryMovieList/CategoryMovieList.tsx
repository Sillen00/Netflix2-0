import { Grid } from "@mantine/core";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
import CategoryButton from "../CategoryButton/CategoryButton";
import MovieCard from "../MovieCard/MovieCard";
import { StyledCategoryMovieList } from "./CategoryMovieList.style";

function CategoryMovieList() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { movies } = useContext(MovieContext);

  // Filter movies based on selected genre
  const filteredMovies = selectedGenre
    ? movies.filter(movie => movie.genre.includes(selectedGenre))
    : movies;

  return (
    <StyledCategoryMovieList>
      <CategoryButton setSelectedGenre={setSelectedGenre} />
      <Grid gutter={20}>
        {filteredMovies.map(movie => (
          <Grid.Col className='grid-item' span={{ base: 6, md: 3, lg: 2.4 }} key={movie.title}>
            <Link to={`/movie/${titleToSlug(movie.title)}`}>
              <MovieCard {...movie} />
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </StyledCategoryMovieList>
  );
}

export default CategoryMovieList;
