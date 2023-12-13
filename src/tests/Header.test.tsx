import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "../components/Header/Header";
import { render, screen } from "../utils/test-utils";

describe("Header", () => {
  it("should render the search results", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search...");
    await userEvent.type(searchInput, "The Matrix");

    const image = await screen.findByAltText("The Matrix");
    expect(image).toBeInTheDocument();
  });

  it("should render header and each of it's elements correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByRole("heading", { name: /netflix 2\.0/i });
    const categoriesLink = screen.getByRole("link", { name: /categories/i });
    const bookmarksLink = screen.getByRole("link", { name: /bookmarks/i });
    const searchInput = screen.getByPlaceholderText("Search...");
    expect(logo).toBeInTheDocument();
    expect(categoriesLink).toBeInTheDocument();
    expect(bookmarksLink).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("should be able to search for a movie", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await userEvent.click(screen.getByRole("button", { name: "search button" }));
    const input = screen.getByRole("textbox");
    await user.type(input, "Inception");
    expect(screen.getByText("2010")).toBeInTheDocument();
  });
});
