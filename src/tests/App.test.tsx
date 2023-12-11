import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "../components/Header/Header";
import MovieViewPage from "../pages/MovieViewPage";
import StartPage from "../pages/StartPage";
import { render, screen } from "../utils/test-utils";

describe("App Functionality", () => {
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
  it("should be able to navigate from Read more to MovieViewPage for Inception", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path='movie/:slug' element={<MovieViewPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Read more")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Read more"));
    expect(
      screen.getByText(
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
      )
    ).toBeInTheDocument();
  });
});
