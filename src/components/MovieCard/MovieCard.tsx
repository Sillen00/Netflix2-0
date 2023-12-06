import { Box, Image } from "@mantine/core";
import { FaRegBookmark } from "react-icons/fa";
import { StyledMovieCard } from "./MovieCard.style";

export interface MovieCardProps {
  thumbnail: string;
  year: string;
  age: string;
}

function MovieCard({ thumbnail, year, age }: MovieCardProps) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
    event.currentTarget.alt = "404 image not found";
  };
  return (
    <StyledMovieCard>
      <Box className='thumbnail-box'>
        <Image
          className='thumbnail'
          src={thumbnail}
          onError={handleImageError}
          alt='movie thumbnail'
        />
      </Box>
      <Box className='movie-card-bottom'>
        <Box>
          <p>{year}</p>
          <p>{age}+</p>
        </Box>
        <Box className='bookmark-box'>
          <FaRegBookmark size={"40px"} />
        </Box>
      </Box>
    </StyledMovieCard>
  );
}

export default MovieCard;
