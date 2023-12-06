import { describe, expect, it } from "vitest";
import MovieCard, { MovieCardProps } from "../components/MovieCard/MovieCard";
import { render, screen, waitFor } from "../utils/test-utils";

interface MovieCardTestProps {
  thumbnail: string; // Make it non-optional
  year: string;
  rating: string;
  title: string;
}

describe("MovieCard", () => {
  it("should render the movie title", () => {
    const movieProps: MovieCardTestProps = {
      thumbnail: "https://example.com/image.jpg",
      year: "2022",
      rating: "PG-13",
      title: "Movie Title",
    };

    render(<MovieCard {...movieProps} />);

    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("PG-13+")).toBeInTheDocument();
    expect(screen.getByAltText("Movie Title")).toBeInTheDocument();
  });

  it("should show a placeholder image if no thumbnail is provided", async () => {
    const movieProps: MovieCardProps = {
      thumbnail: "",
      year: "2022",
      rating: "PG-13",
      title: "Movie Title",
    };

    render(<MovieCard {...movieProps} />);

    const image = await screen.findByAltText("Movie Title");
    waitFor(() => {
      expect(image).toHaveAttribute("src", "./404.png");
    });
  });
});
