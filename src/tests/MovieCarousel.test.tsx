import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import data from "../../data/movies.json";
import MovieCarousel from "../components/MovieCarousel";
import SearchProvider from "../contexts/MovieContext";
import { theme } from "../mantineTheme";

describe("Test for movie carousel component", () => {
  test("Should render carousel with a title", () => {
    render(
      <MantineProvider theme={theme}>
        <SearchProvider>
          <MovieCarousel title={"Test title"} />
        </SearchProvider>
      </MantineProvider>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test title");
    expect(screen.getByLabelText("Movie carousel")).toBeInTheDocument();
  });

  test("Should render all images, with year and rating", () => {
    render(
      <MantineProvider theme={theme}>
        <SearchProvider>
          <MovieCarousel title={"Test title"} />
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
});
