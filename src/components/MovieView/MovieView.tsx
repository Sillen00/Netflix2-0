import { Box, Text, Title } from "@mantine/core";
import errorImg from "../../../public/404.png";
import { Movie } from "../../contexts/MovieContext";
import { StyledMovieView } from "./MovieView.style";

interface Props {
  movie: Movie;
}

function MovieView({ movie }: Props) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = event.currentTarget;
    if (target.getAttribute("data-tried-loading") !== "true") {
      target.setAttribute("data-tried-loading", "true");
      target.src = errorImg;
    }
  };
  const { title, thumbnail, genre, synopsis, year, rating, actors } = movie;

  return (
    <StyledMovieView>
      <img src={thumbnail} alt={title} onError={handleImageError}></img>
      <Box className='text'>
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
