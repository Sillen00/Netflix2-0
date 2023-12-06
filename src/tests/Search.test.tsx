import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "../components/Header/Header";
import { render, screen } from "../utils/test-utils";

describe("Search functionality", () => {
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
});
