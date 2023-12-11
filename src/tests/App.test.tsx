import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "../components/Header/Header";
import BookmarkedPage from "../pages/BookMarkedPage";
import CategoryPage from "../pages/CategoryPage";
import MovieViewPage from "../pages/MovieViewPage";
import StartPage from "../pages/StartPage";
import { render, screen, within } from "../utils/test-utils";

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

it("should be able to navigate from startpage to categorypage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='categories' element={<CategoryPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText("Categories"));
  expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
});
it("should be able to navigate from startpage to bookmarkedpage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='bookmarks' element={<BookmarkedPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText("Bookmarks"));
  expect(screen.getByText("You dont have any movies bookmarked.")).toBeInTheDocument();
});
it("should be able to add a movie to bookmarks and navigate to the bookmarkedpage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='bookmarks' element={<BookmarkedPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const matrixMovieCard = await screen.findByTestId("id-The Matrix");
  const matrixBookmarkButton = within(matrixMovieCard).getByTestId("bookmark-icon");
  await user.click(matrixBookmarkButton);
  await user.click(screen.getByText("Bookmarks"));
  expect(screen.getByText("The Matrix")).toBeInTheDocument();
});

it("should be able to navigate from categorypage to startpage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='categories' element={<CategoryPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText("Categories"));
  expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  await user.click(screen.getByRole("heading", { name: "NETFLIX 2.0" }));
  expect(screen.getByText("Trending")).toBeInTheDocument();
});

it("should be able to navigate from startpage to movieviewpage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<StartPage />} />
        <Route path='movie/:slug' element={<MovieViewPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const goodFellasMovieCard = await screen.findByTestId("id-Goodfellas");
  const goodFellasImg = within(goodFellasMovieCard).getByAltText("Goodfellas");
  await user.click(goodFellasImg);
  expect(
    screen.getByText(
      "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito."
    )
  ).toBeInTheDocument();
});
