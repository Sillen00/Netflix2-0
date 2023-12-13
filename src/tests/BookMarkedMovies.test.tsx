import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import BookmarkedMovies from "../components/BookmarkedMovies/BookmarkedMovies";
import { render, screen } from "../utils/test-utils";

const mockMovies = [
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
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: "PG-13",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    genre: "Action, Adventure, Drama",
    synopsis:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    isTrending: true,
  },
];

describe("Bookmarked", async () => {
  // Clear sessionStorage
  beforeEach(() => {
    window.sessionStorage.clear();
  });
  // setup userEvent
  const user = userEvent.setup();

  it("Should render 'You don't have any movies bookmarked.' if no items are bookmarked", async () => {
    render(
      <MemoryRouter>
        <BookmarkedMovies />
      </MemoryRouter>
    );
    expect(await screen.findByText("You dont have any movies bookmarked.")).toBeInTheDocument();
  });

  it("Should render movies from sessionStorage", async () => {
    // Add test data to sessionStorage
    window.sessionStorage.setItem("bookmarked", JSON.stringify(mockMovies));

    render(
      <MemoryRouter>
        <BookmarkedMovies />
      </MemoryRouter>
    );

    // Expect all titles of movies from sessionStorage to be rendered
    for (const movie of mockMovies) {
      expect(await screen.findByText(movie.title)).toBeInTheDocument();
    }
  });

  it("Should be possible to remove a bookmarked movie", async () => {
    // Add test data
    window.sessionStorage.setItem("bookmarked", JSON.stringify(mockMovies));

    render(
      <MemoryRouter>
        <BookmarkedMovies />
      </MemoryRouter>
    );

    for (const movie of mockMovies) {
      expect(await screen.findByText(movie.title)).toBeInTheDocument();
      expect(mockMovies).toContainEqual(mockMovies[0]);
    }

    // Click on first movies bookmark button
    const firstBookmarkButton = await screen.findByTestId(`bookmark-${mockMovies[0].title}`);
    await user.click(firstBookmarkButton);

    // Check that movie no longer renderes on page
    expect(screen.queryByText(mockMovies[0].title)).toBeNull();

    // Check if the movie is removed from sessionStorage and still contains the other movie
    let updatedBookmarkedMovies = JSON.parse(window.sessionStorage.getItem("bookmarked") || "[]");
    expect(updatedBookmarkedMovies).not.toContainEqual(mockMovies[0]);
    expect(updatedBookmarkedMovies).toContainEqual(mockMovies[1]);

    // Click on second movies bookmark button
    const secondBookmarkButton = await screen.findByTestId(`bookmark-${mockMovies[1].title}`);
    await user.click(secondBookmarkButton);

    // Check if second movie is removed from sessionStorage
    updatedBookmarkedMovies = JSON.parse(window.sessionStorage.getItem("bookmarked") || "[]");
    expect(updatedBookmarkedMovies).not.toContainEqual(mockMovies[1]);

    // Expect no bookmark text to be rendered
    expect(await screen.findByText("You dont have any movies bookmarked.")).toBeInTheDocument();
  });
});
