import { Box, Image } from "@mantine/core";
import { FaRegBookmark } from "react-icons/fa";
import { StyledComponent } from "./MovieCard.style";

interface MovieCardProps {
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
    <StyledComponent className='card-container'>
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
          <FaRegBookmark size={"49.6px"} />
        </Box>
      </Box>
    </StyledComponent>
  );
}

export default MovieCard;
