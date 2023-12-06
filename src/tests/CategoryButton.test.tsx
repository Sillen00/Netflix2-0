import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import { StyledSelect } from "../components/CategoryButton/CategoryButton.style";

describe("Category Button", () => {
  it("should see if the category buttons exist on a screen with width larger than 1210px", () => {
    global.innerWidth = 1220;

    render(<CategoryButton setSelectedGenre={() => {}} />);
  });

  it("should see if the select exist on a screen with width smaller than 1210px", () => {
    global.innerWidth = 1200;

    render(<StyledSelect />);
  });
});
