import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import StartPage from "../pages/StartPage";
import { render, screen, waitFor } from "../utils/test-utils";

describe("Carousel", () => {
  it("Recommended and trending movies should not contain the same movies", async () => {
    render(
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    );
    await waitFor(() => {
      // Get all movie cards by selecting data-testid beginning with id-
      const allMovieCards = screen.getAllByTestId(/^id-.+/);

      // Filter movie cards by their parent carousel's testid and create array from movies testids
      const trendingMovies = allMovieCards
        .filter(card => card.closest('[data-testid="Trending"]'))
        .map(card => card.dataset.testid);

      const recommendedMovies = allMovieCards
        .filter(card => card.closest('[data-testid="Recommended for you"]'))
        .map(card => card.dataset.testid);

      // Check to see if there are any duplicates of the same movie
      const overlap = trendingMovies.some(movie => recommendedMovies.includes(movie));
      expect(overlap).toBeFalsy();
    });
  });
});
