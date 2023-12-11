import { Box, Image, Text, Tooltip } from "@mantine/core";
import { useContext, useRef, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
import { StyledMovieCard } from "./MovieCard.style";

export interface MovieProps {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

function MovieCard(movie: MovieProps) {
  const { bookmarkedMovies, setBookmarkedMovies } = useContext(MovieContext);
  const [opened, setOpened] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const tooltipTimer = useRef<NodeJS.Timeout | null>(null);

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  const handleBookmarkClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.some(m => m.title === movie.title);
    if (!isBookmarked) {
      setTooltipText("Added to bookmarks!");
    } else {
      setTooltipText("Removed from bookmarks!");
    }

    setOpened(true);

    if (tooltipTimer.current) {
      clearTimeout(tooltipTimer.current);
    }
    tooltipTimer.current = setTimeout(() => {
      setOpened(false);
    }, 1500);

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
        <Tooltip label={tooltipText} position='bottom' offset={-25} opened={opened}>
          <Box
            onClick={handleBookmarkClick}
            className='bookmark-box'
            data-testid={`bookmark-${movie.title}`}
          >
            {/* If movie is bookmarked, show a text with text "OO" else show FaRegBookmark icon. */}
            {bookmarkedMovies.some(m => m.title === movie.title) ? (
              <FaBookmark size={"30px"} />
            ) : (
              <FaRegBookmark size={"30px"} />
            )}
          </Box>
        </Tooltip>
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
