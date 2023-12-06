import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { Movie } from "../../contexts/MovieContext";
import MovieCard from "../MovieCard/MovieCard";
import { StyledMovieCarousel } from "./MovieCarousel.style";
interface Prop {
  title: string;
  movies: Movie[];
}

function MovieCarousel({ title, movies }: Prop) {
  return (
    <StyledMovieCarousel aria-label='Movie carousel'>
      <Title order={2}>{title}</Title>
      <Carousel
        slideSize={{ base: "60%", sm: "30%", md: "16%" }}
        align='start'
        slideGap='sm'
        controlsOffset='xs'
        slidesToScroll={2}
        loop
      >
        {movies.map((movie, index) => (
          <Carousel.Slide key={index}>
            <MovieCard
              thumbnail={movie.thumbnail}
              year={movie.year.toString()}
              rating={movie.rating}
              title={movie.title}
            />
          </Carousel.Slide>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
