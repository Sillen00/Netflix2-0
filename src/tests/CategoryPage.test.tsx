import { describe, it } from "vitest";
import CategoryPage from "../pages/CategoryPage";
import { render } from "../utils/test-utils";

describe("Category Page", () => {
  it("should render CategoryPage with MovieCards", () => {
    render(<CategoryPage />);
  });
});
