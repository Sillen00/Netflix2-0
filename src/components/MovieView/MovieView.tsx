import { Box, Text, Title } from "@mantine/core";
import { Movie } from "../../contexts/MovieContext";
import { StyledMovieView } from "./MovieView.style";

interface Props {
  movie: Movie;
}

function MovieView({ movie }: Props) {
  const { title, thumbnail, genre, synopsis, year, rating, actors } = movie;

  return (
    <StyledMovieView>
      <img src={thumbnail} alt={title}></img>
      <Box>
        <Box className='top'>
          <Box>
            <Title order={4}>
              <b>Year: </b>
              {year}
            </Title>
            <Title order={4}>
              <b>Rating: </b>
              {rating}
            </Title>
          </Box>
          <Box className='bookmark'></Box>
        </Box>
        <Title order={1}>{title}</Title>
        <Text>{synopsis}</Text>
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
