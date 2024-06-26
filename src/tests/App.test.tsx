import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App";
import Header from "../components/Header/Header";
import BookmarkedPage from "../pages/BookMarkedPage";
import CategoryPage from "../pages/CategoryPage";
import MovieViewPage from "../pages/MovieViewPage";
import NotFoundPage from "../pages/NotFoundPage";
import StartPage from "../pages/StartPage";
import { render, screen, within } from "../utils/test-utils";

describe("App Functionality", () => {
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

  it("should render the 404 page if the url route does not exist", async () => {
    render(
      <MemoryRouter initialEntries={["/fff"]}>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('The page "fff" was not found.')).toBeInTheDocument();
  });
});

describe("Navigation between startpage and categorypage", () => {
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

  it("should be able to navigate from categorypage to startpage", async () => {
    render(
      <MemoryRouter initialEntries={["/categories"]}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<StartPage />} />
            <Route path='categories' element={<CategoryPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("heading", { level: 1, name: "NETFLIX 2.0" }));
    expect(screen.getByText("Trending")).toBeInTheDocument();
  });
});

describe("Navigation between startpage and bookmarkedpage", () => {
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

  it("should be able to navigate from bookmarkedpage to startpage", async () => {
    render(
      <MemoryRouter initialEntries={["/bookmarks"]}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<StartPage />} />
            <Route path='bookmarks' element={<BookmarkedPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole("heading", { level: 1, name: "NETFLIX 2.0" }));
    expect(screen.getByText("Trending")).toBeInTheDocument();
  });
});

describe("should be able to navigate between startpage and movieviewpage", () => {
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
    const godFatherMovieCard = await screen.findByTestId("id-The Godfather: Part II");
    const godFatherMovieCardImg = within(godFatherMovieCard).getByRole("img");
    await user.click(godFatherMovieCardImg);
    expect(
      screen.getByText(
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
      )
    ).toBeInTheDocument();
  });

  it("should be able to navigate from movieviewpage to startpage", async () => {
    render(
      <MemoryRouter initialEntries={["/movie/some-movie"]}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<StartPage />} />
            <Route path='movie/:slug' element={<MovieViewPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByRole("heading", { level: 1, name: "NETFLIX 2.0" }));
    expect(screen.getByText("Trending")).toBeInTheDocument();
  });
});

it("should be able to navigate from categories to movieviewpage", async () => {
  render(
    <MemoryRouter>
      <Header />
      <Routes>
        <Route index element={<CategoryPage />} />
        <Route path='movie/:slug' element={<MovieViewPage />} />
      </Routes>
    </MemoryRouter>
  );
  const user = userEvent.setup();
  const godFatherMovieCard = await screen.findByTestId("id-The Godfather: Part II");
  const godFatherMovieCardImg = within(godFatherMovieCard).getByRole("img");
  await user.click(godFatherMovieCardImg);
  expect(
    screen.getByText(
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
    )
  ).toBeInTheDocument();
});
