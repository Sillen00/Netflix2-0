import { Box, Image } from "@mantine/core";
import { StyledComponent } from "./MovieCard.style";

interface MovieCardProps {
  thumbnail: string;
  year: string;
  age: string;
}

function MovieCard({ thumbnail, year, age }: MovieCardProps) {
  return (
    <>
      <StyledComponent>
        <Box className='tumbnail-box'>
          <Image className='tumbnail' src={thumbnail} />
        </Box>
        <Box className='movie-card-buttom'>
          <Box>
            <p>{year}</p>
            <p>{age}</p>
          </Box>
          <Box className='bookmark-box'>
            <Image src='./bookmark.png' alt='bookmark button' />
          </Box>
        </Box>
      </StyledComponent>
    </>
  );
}

export default MovieCard;
