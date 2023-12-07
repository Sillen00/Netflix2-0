import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CategoryPage from "../pages/CategoryPage";
import { fireEvent, render, screen } from "../utils/test-utils";

describe("Category Page", () => {
  it("should render CategoryPage with MovieCards", () => {
    render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    );
  });

  it("should update selectedGenre when clicking on a genre button", async () => {
    render(
      <MemoryRouter>
        <CategoryPage />
      </MemoryRouter>
    );
    const actionButton = screen.getByText("Action");
    fireEvent.click(actionButton);

    expect(screen.getByTestId("Action-button").textContent).toBe("Action");
  });
});
