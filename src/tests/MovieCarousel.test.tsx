import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import data from "../../data/movies.json";
import MovieCarousel from "../components/MovieCarousel/MovieCarousel";
import { render, screen, within } from "../utils/test-utils";

describe("Test for movie carousel component", () => {
  it("Should render carousel with a title", () => {
    render(
      <MemoryRouter>
        <MovieCarousel movies={data} heading={"Test title"} />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test title");
    expect(screen.getByLabelText("Movie carousel")).toBeInTheDocument();
  });

  it("Should render all images, with year and rating", () => {
    render(
      <MemoryRouter>
        <MovieCarousel movies={data} heading={"Test title"} />
      </MemoryRouter>
    );

    data.forEach(movie => {
      expect(screen.getByAltText(movie.title)).toBeInTheDocument();
      const image = screen.getByAltText(movie.title) as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", movie.thumbnail);
      const movieCard = screen.getByTestId(`id-${movie.title}`);
      expect(within(movieCard).getByText(movie.year.toString())).toBeInTheDocument();
      expect(within(movieCard).getByText(movie.rating)).toBeInTheDocument();
    });
  });
});
