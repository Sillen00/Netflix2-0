import { Box, Image, Text } from "@mantine/core";
import { useContext } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
import { StyledMovieCard } from "./MovieCard.style";

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

function MovieCard(movie: Movie) {
  const { bookmarkedMovies, setBookmarkedMovies } = useContext(MovieContext);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  const handleBookmarkClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.some(m => m.title === movie.title);

    // If it's bookmarked, remove it; otherwise, add it
    const updatedBookmarkedMovies = isBookmarked
      ? bookmarkedMovies.filter(m => m.title !== movie.title)
      : [...bookmarkedMovies, movie];

    // Update the bookmarkedMovies state with the new array
    setBookmarkedMovies(updatedBookmarkedMovies);
  };

  return (
    <StyledMovieCard data-testid={`id-${movie.title}`}>
      <Link to={`/movie/${titleToSlug(movie.title)}`}>
        <Box className='thumbnail-box'>
          <Image
            className='thumbnail'
            src={movie.thumbnail}
            onError={handleImageError}
            alt={movie.title}
          />
        </Box>
      </Link>
      <Box className='movie-card-bottom'>
        <Link to={`/movie/${titleToSlug(movie.title)}`}>
          <Box className='movie-card-text'>
            <Text>{movie.title}</Text>
            <Text>{movie.year}</Text>
            <Text>{movie.rating}</Text>
          </Box>
        </Link>

        <Box onClick={handleBookmarkClick} className='bookmark-box'>
          {/* If movie is bookmarked, show a text with text "OO" else show FaRegBookmark icon. */}
          {bookmarkedMovies.some(m => m.title === movie.title) ? (
            <FaBookmark size={"30px"} />
          ) : (
            <FaRegBookmark size={"30px"} />
          )}
        </Box>
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
