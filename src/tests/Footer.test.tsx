import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer/Footer";
import { render, screen } from "../utils/test-utils";

describe("Footer", () => {
  it("should render the footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Bookmarked")).toBeInTheDocument();
    expect(screen.getByText("NETFLIX 2.0")).toBeInTheDocument();
    expect(screen.getByText("Github Links")).toBeInTheDocument();
    expect(screen.getByText("Moa")).toBeInTheDocument();
    expect(screen.getByText("Leon")).toBeInTheDocument();
    expect(screen.getByText("Edvin")).toBeInTheDocument();
    expect(screen.getByText("Ellen")).toBeInTheDocument();
    expect(screen.getByText("Simon")).toBeInTheDocument();
  });

  it("should check if the github links is correct href", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const simonGithub = screen.getByText("Simon");
    expect(simonGithub).toHaveAttribute("href", "https://github.com/Sillen00");
    const ellenGithub = screen.getByText("Ellen");
    expect(ellenGithub).toHaveAttribute("href", "https://github.com/ellensofia");
    const edvinGithub = screen.getByText("Edvin");
    expect(edvinGithub).toHaveAttribute("href", "https://github.com/Edvindjulic");
    const leonGithub = screen.getByText("Leon");
    expect(leonGithub).toHaveAttribute("href", "https://github.com/leonbjorklund");
    const moaGithub = screen.getByText("Moa");
    expect(moaGithub).toHaveAttribute("href", "https://github.com/moamoa07");
  });
});
