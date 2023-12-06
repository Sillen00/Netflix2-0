import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import MovieContextProvider from "./contexts/MovieContext";
import "./index.css";
import { theme } from "./mantineTheme";
import BookMarkedPage from "./pages/BookMarkedPage";
import CategoryPage from "./pages/CategoryPage";
import MovieViewPage from "./pages/MovieViewPage";
import StartPage from "./pages/StartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<StartPage />} />
      <Route path='BookMarkedPage' element={<BookMarkedPage />} />
      <Route path='CategoryPage' element={<CategoryPage />} />
      <Route path='movie/:slug' element={<MovieViewPage />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <MovieContextProvider>
        <RouterProvider router={router} />
      </MovieContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
