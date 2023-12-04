import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { MantineProvider } from '@mantine/core';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { theme } from './mantineTheme';
import BookMarkedPage from './pages/BookMarkedPage';
import CategoryPage from './pages/CategoryPage';
import MovieViewPage from './pages/MovieViewPage';
import StartPage from './pages/StartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<StartPage />} />
      <Route path='BookMarkedPage' element={<BookMarkedPage />} />
      <Route path='CategoryPage' element={<CategoryPage />} />
      <Route path='MovieViewPage' element={<MovieViewPage />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
