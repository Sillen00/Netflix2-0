import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer/Footer";
import { render, screen } from "../utils/test-utils";

describe("Footer", () => {
  it("should render the footer", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Bookmarks")).toBeInTheDocument();
    expect(screen.getByText("GitHub profiles")).toBeInTheDocument();
    expect(screen.getByText("Edvin")).toBeInTheDocument();
    expect(screen.getByText("Ellen")).toBeInTheDocument();
    expect(screen.getByText("Simon")).toBeInTheDocument();
  });

  it("should check if the github links is correct href", () => {
    render(
      <Router>
        <Footer />
      </Router>
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
