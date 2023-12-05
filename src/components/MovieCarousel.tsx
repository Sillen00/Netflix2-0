import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { StyledMovieCarousel } from "./MovieCarousel.style";
interface Prop {
  title: string;
}

function MovieCarousel({ title }: Prop) {
  const { movies } = useContext(MovieContext);

  return (
    <StyledMovieCarousel aria-label='Movie carousel'>
      <Title order={2}>{title}</Title>
      <Carousel
        slideSize={{ base: "50%", sm: "33.3333%", md: "16%" }}
        align='start'
        slideGap='sm'
        controlsOffset='xs'
        loop
      >
        {movies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <div>movieCard {movie.title}</div>
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
