import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { Movie } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import { StyledMovieCarousel } from "./MovieCarousel.style";
interface Prop {
  heading: string;
  movies: Movie[];
}

function MovieCarousel({ heading, movies }: Prop) {
  return (
    <StyledMovieCarousel aria-label='Movie carousel'>
      <Title order={2}>{heading}</Title>
      <Carousel
        slideSize={{ base: "60%", sm: "30%", md: "20%" }}
        align='start'
        slideGap='lg'
        controlsOffset='xs'
        slidesToScroll={2}
        loop
      >
        {movies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <MovieCard {...movie} />
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
