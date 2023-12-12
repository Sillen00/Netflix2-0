import { Box, Image, Text, Title } from "@mantine/core";
import { useState } from "react";
import { Movie } from "../../contexts/MovieContext";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import { StyledMovieView } from "./MovieView.style";

interface Props {
  movie: Movie;
}

function MovieView({ movie }: Props) {
  const [imageSrc, setImageSrc] = useState(movie.thumbnail);

  const handleImageError = () => {
    setImageSrc("../404.png");
  };
  const { title, genre, synopsis, year, rating, actors } = movie;

  return (
    <StyledMovieView>
      <Image src={imageSrc} onError={handleImageError} alt={title} />
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
