import { describe, expect, it } from "vitest";
import MovieCard from "../components/MovieCard/MovieCard";
import { render, screen } from "../utils/test-utils";

interface MovieCardTestProps {
  thumbnail: string; // Make it non-optional
  year: string;
  age: string;
  title: string;
}

describe("MovieCard", () => {
  it("should render the movie title", () => {
    const movieProps: MovieCardTestProps = {
      thumbnail: "https://example.com/image.jpg",
      year: "2022",
      age: "PG-13",
      title: "Movie Title",
    };

    render(<MovieCard {...movieProps} />);

    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("PG-13+")).toBeInTheDocument();
    expect(screen.getByAltText("Movie Title")).toBeInTheDocument();
  });
});
