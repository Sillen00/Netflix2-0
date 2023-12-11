import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CategoryPage from "../pages/CategoryPage";
import { render, screen } from "../utils/test-utils";

describe("Category Page", () => {
  it("should render CategoryPage with MovieCards", async () => {
    render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Action"));
    expect(screen.getByRole("img", { name: "The Dark Knight" })).toBeInTheDocument();
  });

  it("should update selectedGenre when clicking on a genre button", async () => {
    render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Music"));
    expect(screen.getByText("Whiplash")).toBeInTheDocument();
  });
});
