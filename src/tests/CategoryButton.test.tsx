import { render, screen} from "../utils/test-utils";
import { describe, expect, it } from "vitest";
import CategoryButton from "../components/CategoryButton/CategoryButton";

describe("Category Button", () => {
  it("should see if the category buttons renders", () => {
    render(<CategoryButton setSelectedGenre={() => {}} />);
  });
  expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
});
