import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CategoryPage from "../pages/CategoryPage";
import { render, screen } from "../utils/test-utils";


// const setupMobile = () => {
//   window.matchMedia = vi.fn().mockImplementation(query => ({
//     matches: query === "(max-width: 1240px)",
//     addListener: vi.fn(),
//     removeListener: vi.fn(),
//   }));
// };

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
    //Expect "Whiplash" movie to be rendered.
    expect(screen.getByText("Whiplash")).toBeInTheDocument();
  });

  // it("should update selectedGenre when selecting a genre from the dropdown on mobile", async () => {
    
  //   setupMobile();
  //   render(
  //     <MemoryRouter>
  //       <CategoryPage />
  //     </MemoryRouter>
  //   );

  //   // Ensure that the component renders the Select on small screens
  //   const selectComponent = screen.getByTestId("select-component");
  //   expect(selectComponent).toBeInTheDocument();

  //   await act(async () => {
  //     await userEvent.selectOptions(selectComponent, "Music");
  //   });
  //   expect(screen.getByText("Whiplash")).toBeInTheDocument();
  // });
});
