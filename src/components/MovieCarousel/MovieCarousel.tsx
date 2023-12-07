import { Carousel } from "@mantine/carousel";
import { Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Movie } from "../../contexts/MovieContext";
import { titleToSlug } from "../../pages/MovieViewPage";
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
        slideGap='lg'
        controlsOffset='xs'
        slidesToScroll={2}
        loop
      >
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${titleToSlug(title)}`}>
            <Carousel.Slide>
              <MovieCard
                thumbnail={movie.thumbnail}
                year={movie.year}
                rating={movie.rating}
                title={movie.title}
              />
            </Carousel.Slide>
          </Link>
        ))}
        ;
      </Carousel>
    </StyledMovieCarousel>
  );
}

export default MovieCarousel;
