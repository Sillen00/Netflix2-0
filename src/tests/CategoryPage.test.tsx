import { describe, expect, it } from "vitest";
import CategoryPage from "../pages/CategoryPage";
import { fireEvent, render, screen } from "../utils/test-utils";

describe("Category Page", () => {
  it("should render CategoryPage with MovieCards", () => {
    render(<CategoryPage />);
  });

  it("should update selectedGenre when clicking on a genre button", async () => {
    render(<CategoryPage />);

    const actionButton = screen.getByText("Action");
    fireEvent.click(actionButton);

    expect(screen.getByTestId("Action-button").textContent).toBe("Action");
  });
});
