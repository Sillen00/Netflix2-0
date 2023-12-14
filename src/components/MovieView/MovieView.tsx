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
      <Box>
        <Box className='top'>
          <Box className='meta'>
            <Text span>{year}</Text>
            <Title order={4}>{rating}</Title>
          </Box>
          <BookmarkButton {...movie} />
        </Box>
        <Title order={1}>{title}</Title>
        <Text>{synopsis}</Text>
        <Box>
          <Box>
            <Text span>Actors: </Text>
            {actors.map((actor, index) => (
              <Text span key={index}>
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
