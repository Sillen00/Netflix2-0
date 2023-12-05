import { Box, Container, Image } from "@mantine/core";
import { StyledComponent } from "./MovieCard.style";

function MovieCard() {
  return (
    <StyledComponent>
      <Box className='bookmark-box'>
        <Image src='./bookmark.png' alt='bookmark button' />
      </Box>
      <Container>
        <Box>
          <p>Årtal</p>
          <p>åldersgräns</p>
        </Box>
      </Container>
    </StyledComponent>
  );
}

export default MovieCard;
