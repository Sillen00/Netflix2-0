import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import StartPage from "../pages/StartPage";
import { render, screen } from "../utils/test-utils";

describe("Carousel", () => {
  it("Carousels should not render the same movies", () => {
    render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    );
    it("Recommended and trending movies should not contain the same movies", () => {
      // Hämta alla filmer under varje titel
      const trendingMoviesElements = screen.getAllByTestId("trending");
      const recommendedMoviesElements = screen.getAllByTestId("recommended");

      const trendingMovies = trendingMoviesElements.map(element => element.textContent);
      const recommendedMovies = recommendedMoviesElements.map(element => element.textContent);

      // Kontrollera att det inte finns några överlappningar
      const overlap = trendingMovies.some(movie => recommendedMovies.includes(movie));
      expect(overlap).toBeFalsy();
    });
  });
});
