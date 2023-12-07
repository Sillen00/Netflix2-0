import { Box, Image } from "@mantine/core";
import { FaRegBookmark } from "react-icons/fa";
import { StyledMovieCard } from "./MovieCard.style";

export interface MovieCardProps {
  thumbnail: string;
  year: number;
  rating: string;
  title: string;
}

function MovieCard({ thumbnail, year, rating, title }: MovieCardProps) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
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
          <FaRegBookmark size={"30px"} />
        </Box>
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
