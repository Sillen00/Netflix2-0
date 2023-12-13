import { Box, Image, Text, Title } from "@mantine/core";
import { useRef } from "react";
import notFoundImage from "../../assets/404.png";
import { Movie } from "../../utils/dataTypes";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import { StyledMovieView } from "./MovieView.style";

function MovieView(movie: Movie) {
  const imageRef = useRef<HTMLImageElement>(null);
  const { title, genre, synopsis, year, rating, actors, thumbnail } = movie;

  const handleImageError = () => {
    if (imageRef.current) {
      imageRef.current.src = notFoundImage;
    }
  };

  return (
    <StyledMovieView>
      <Image ref={imageRef} src={thumbnail} onError={handleImageError} alt={title} />
      <Box className='text'>
        <Box className='top'>
          <Box className='meta'>
            <Title order={4}>{year}</Title>
            <Title order={4}>{rating}</Title>
          </Box>
          <BookmarkButton {...movie} />
        </Box>
        <Box>
          <Title order={1}>{title}</Title>
          <Text>{synopsis}</Text>
        </Box>
        <Box className='bottom'>
          <Box>
            <Text span>Actors: </Text>
            {actors.map((actor, index) => (
              <Text span variant='span' key={index}>
                {actor}{" "}
              </Text>
            ))}
          </Box>
          <Text span>Genre: {genre}</Text>
        </Box>
      </Box>
    </StyledMovieView>
  );
}

export default MovieView;
