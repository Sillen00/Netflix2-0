import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Video from "../components/Video/Video";
import { render, screen } from "../utils/test-utils";

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: "PG-13",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    genre: "Action, Adventure, Sci-Fi",
    synopsis:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  },
];

describe("Tests for Video component", () => {
  it("should render the poster image and title when the component mounts", () => {
    render(
      <MemoryRouter>
        <Video movies={movies} />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Inception poster")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render the video and title after 3 seconds", async () => {
    render(
      <MemoryRouter>
        <Video movies={movies} />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
      expect(screen.getByRole("video")).toBeInTheDocument();
    }, 3000);
  });

  it("should unmute the video when the mute button is clicked", async () => {
    render(
      <MemoryRouter>
        <Video movies={movies} />
      </MemoryRouter>
    );
    setTimeout(async () => {
      expect(screen.getByRole("video")).toHaveAttribute("muted");
      const unmuteButton = screen.getByLabelText("unmute");
      expect(unmuteButton).toBeInTheDocument();
      await userEvent.click(unmuteButton);
      expect(screen.getByRole("video")).not.toHaveAttribute("muted");
    }, 3000);
  });

  it("should mute the video when the mute button is clicked", async () => {
    render(
      <MemoryRouter>
        <Video movies={movies} />
      </MemoryRouter>
    );
    setTimeout(async () => {
      // Videon är mutad från början.
      // För att testa att den blir mutad igen klickar testet först på unmute-knappen.
      expect(screen.getByRole("video")).toHaveAttribute("muted");
      const unmuteButton = screen.getByLabelText("unmute");
      expect(unmuteButton).toBeInTheDocument();
      await userEvent.click(unmuteButton);
      expect(screen.getByRole("video")).not.toHaveAttribute("muted");

      // Klicka på mute-knappen
      expect(screen.getByLabelText("mute")).toBeInTheDocument();
      await userEvent.click(screen.getByLabelText("mute"));
      expect(screen.getByRole("video")).toHaveAttribute("muted");
    }, 3000);
  });
});
