import { Box, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { titleToSlug } from "../../pages/MovieViewPage";
import { Movie } from "../../utils/dataTypes";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import { StyledMovieCard } from "./MovieCard.style";

function MovieCard(movie: Movie) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  return (
    <StyledMovieCard data-testid={`id-${movie.title}`}>
      <Link to={`/movie/${titleToSlug(movie.title)}`}>
        <Box className='thumbnail-box'>
          <Image src={movie.thumbnail} onError={handleImageError} alt={movie.title} />
        </Box>
      </Link>
      <Box className='movie-card-bottom'>
        <Link to={`/movie/${titleToSlug(movie.title)}`}>
          <Box className='movie-card-text'>
            <Text className='title'>{movie.title}</Text>
            <Box className='meta'>
              <Text>{movie.year}</Text>
              <Text>{movie.rating}</Text>
            </Box>
          </Box>
        </Link>
        <BookmarkButton {...movie} />
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
