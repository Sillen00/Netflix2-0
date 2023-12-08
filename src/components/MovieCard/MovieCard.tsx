import { Box, Image } from "@mantine/core";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { MovieContext } from "../../contexts/MovieContext";
import { StyledMovieCard } from "./MovieCard.style";

export interface MovieCardProps {
  thumbnail: string;
  year: number;
  rating: string;
  title: string;
}

function MovieCard({ thumbnail, year, rating, title }: MovieCardProps) {
  const { bookmarkedMovies, setBookmarkedMovies } = useContext(MovieContext);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  const handleBookmarkClick = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();

    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.includes(title);

    // If it's bookmarked, remove it; otherwise, add it
    const updatedBookmarkedMovies = isBookmarked
      ? bookmarkedMovies.filter(movie => movie !== title)
      : [...bookmarkedMovies, title];

    // Update the bookmarkedMovies state with the new array
    setBookmarkedMovies(updatedBookmarkedMovies);
  };

  return (
    <StyledMovieCard data-testid={`id-${title}`}>
      <Box className='thumbnail-box'>
        <Image className='thumbnail' src={thumbnail} onError={handleImageError} alt={title} />
      </Box>
      <Box className='movie-card-bottom'>
        <Box className='movie-card-text'>
          <p>{title}</p>
          <p>{year}</p>
          <p>{rating}</p>
        </Box>
        <Box className='bookmark-box'>
          <FaRegBookmark onClick={() => handleBookmarkClick} size={"30px"} />
        </Box>
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
