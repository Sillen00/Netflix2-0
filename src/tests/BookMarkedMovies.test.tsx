import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BookmarkedMovies from "../components/BookmarkedMovies/BookmarkedMovies";
import { render, screen } from "../utils/test-utils";

// Should render You dont have any movies bookmarked. if no items are in sessionStorage
// Should be possible to remove movies

// Test if only bookmarked movies are rendered on this page.
describe("Bookmarked", async () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("Should render 'You don't have any movies bookmarked.' if no items are in sessionStorage", async () => {
    render(
      <MemoryRouter>
        <BookmarkedMovies />
      </MemoryRouter>
    );
    expect(await screen.findByText("You dont have any movies bookmarked.")).toBeInTheDocument();
  });

  it("Should render movies from sessionStorage", async () => {
    // TODO:
    // Test if only bookmarked movies are rendered

    // Add test data to sessionStorage
    const testMovies = [
      {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: "R",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        genre: "Drama",
        synopsis:
          "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        thumbnail:
          "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      },
    ];

    window.sessionStorage.setItem("bookmarked", JSON.stringify(testMovies));

    render(
      <MemoryRouter>
        <BookmarkedMovies />
      </MemoryRouter>
    );
    // Expect all movies from sessionStorage to be rendered
    for (const movie of testMovies) {
      expect(await screen.findByText(movie.title)).toBeInTheDocument();
    }
  });

  // TODO:
  it("Should be possible to remove a bookmarked movie", () => {});
});

// const bookmarkedString = window.sessionStorage.getItem("bookmarked");
// if (bookmarkedString) {
//   console.log(JSON.parse(bookmarkedString));
// } else {
//   console.log("No movies.");
// }
