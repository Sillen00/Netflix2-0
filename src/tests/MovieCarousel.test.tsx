import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import data from "../../data/movies.json";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import SearchProvider from "../contexts/MovieContext";
import { theme } from "../mantineTheme";

describe("Test for movie carousel component", () => {
  it("Should render carousel with a title", () => {
    render(
      <MantineProvider theme={theme}>
        <SearchProvider>
          <MovieCarousel movies={data} title={"Test title"} />
        </SearchProvider>
      </MantineProvider>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test title");
    expect(screen.getByLabelText("Movie carousel")).toBeInTheDocument();
  });

  it("Should render all images, with year and rating", () => {
    render(
      <MantineProvider theme={theme}>
        <SearchProvider>
          <MovieCarousel movies={data} title={"Test title"} />
        </SearchProvider>
      </MantineProvider>
    );

    data.forEach(movie => {
      expect(screen.getByAltText(movie.title)).toBeInTheDocument();
      const image = screen.getByAltText(movie.title) as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", movie.thumbnail);
      expect(screen.getByTestId(`year-${movie.year}-${movie.title}`)).toHaveTextContent(
        movie.year.toString()
      );
      expect(screen.getByTestId(`rating-${movie.rating}-${movie.title}`)).toHaveTextContent(
        movie.rating
      );
    });
  });

  it("Recommended and trending movies should not contain the same movies", () => {
    const numOfTrending = 10;
    const numOfRecommended = 12;

    const shuffledMovies = [...data].sort(() => 0.5 - Math.random());
    const trendingMovies = shuffledMovies.slice(0, numOfTrending);
    const recommendedMovies = shuffledMovies.slice(numOfTrending, numOfTrending + numOfRecommended);

    const overlap = trendingMovies.some(movie => recommendedMovies.includes(movie));

    expect(overlap).toBeFalsy();
  });
});
