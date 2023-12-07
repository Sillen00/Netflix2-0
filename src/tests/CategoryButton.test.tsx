import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import CategoryButton from "../components/CategoryButton/CategoryButton";

describe("Category Button", () => {
  it("should see if the category buttons renders", () => {
    render(<CategoryButton setSelectedGenre={() => {}} />);
  });
});
