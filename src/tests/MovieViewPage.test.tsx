import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import MovieViewPage from "../pages/MovieViewPage";
import { render, screen } from "../utils/test-utils";

describe("MovieViewPage component", () => {
  it("Renders content based on the URL", () => {
    // Mock useParams
    // Import all functionalities of the actual 'react-router-dom' module
    // Override the 'useParams' function specifically for this mock
    // Return a fixed object when useParams is called in test
    vi.mock("react-router-dom", async () => {
      const actual = (await vi.importActual(
        "react-router-dom"
      )) as typeof import("react-router-dom");
      return {
        ...actual,
        useParams: () => ({
          slug: "the-good-the-bad-and-the-ugly",
        }),
      };
    });

    render(
      <MemoryRouter>
        <MovieViewPage />
      </MemoryRouter>
    );

    const image = screen.getByAltText("The Good, the Bad and the Ugly");
    expect(image).toHaveAttribute(
      "src",
      "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "The Good, the Bad and the Ugly"
    );
    expect(screen.getByText("1966")).toBeInTheDocument();
    expect(screen.getByText("Not Rated")).toBeInTheDocument();
    expect(screen.getByText(/Western/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Actors:")).toBeInTheDocument();
    expect(screen.getByText(/Clint Eastwood/i)).toBeInTheDocument();
    expect(screen.getByText(/Lee Van Cleef/i)).toBeInTheDocument();
    expect(screen.getByText(/Eli Wallach/i)).toBeInTheDocument();
  });
});
