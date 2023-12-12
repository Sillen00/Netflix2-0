import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import MovieCard from "../components/MovieCard/MovieCard";
import { render, screen, waitFor } from "../utils/test-utils";


describe("MovieCard", () => {
  it("should render the movieCard", () => {
    const movieProps = {
      title: "Movie Title",
      year: 2022,
      rating: "PG-13",
      actors: [""],
      genre: "",
      synopsis: "",
      thumbnail: "https://example.com/image.jpg",
      isTrending: false,
    };

    render(
      <MemoryRouter>
        <MovieCard {...movieProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("PG-13")).toBeInTheDocument();
    expect(screen.getByAltText("Movie Title")).toBeInTheDocument();
  });

  it("should show a placeholder image if no thumbnail is provided", async () => {
    const movieProps = {
      title: "Movie Title",
      year: 2022,
      rating: "PG-13",
      actors: [""],
      genre: "",
      synopsis: "",
      thumbnail: "",
      isTrending: false,
    };

    render(
      <MemoryRouter>
        <MovieCard {...movieProps} />
      </MemoryRouter>
    );

    // Providing a wrong src/thumbnail will result in a 404 image
    const image = await screen.findByAltText("Movie Title");
    waitFor(() => {
      expect(image).toHaveAttribute("src", "./404.png");
    });
  });
});
