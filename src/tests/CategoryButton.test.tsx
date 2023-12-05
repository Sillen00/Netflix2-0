import { render } from "@testing-library/react";
import { test } from "vitest";
import CategoryButton from "../components/CategoryButton/CategoryButton";

test("should see if the category buttons exists", () => {
  render(<CategoryButton setSelectedGenre={() => {}} />);
});
