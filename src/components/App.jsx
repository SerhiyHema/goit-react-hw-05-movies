import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('layout/Layout'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const Movie = lazy(() => import('pages/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
