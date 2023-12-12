import { useSessionStorage } from "@mantine/hooks";
import { createContext, useEffect, useState } from "react";
import data from "../../data/movies.json";
import { Movie } from "../utils/dataTypes";

export interface MovieContextValue {
  movies: Movie[];
  bookmarkedMovies: Movie[];
  setBookmarkedMovies: (bookmarkedMovies: Movie[]) => void;
}

export interface ProviderProps {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextValue>({
  movies: [],
  bookmarkedMovies: [],
  setBookmarkedMovies: () => {},
});

export default function SearchProvider({ children }: ProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useSessionStorage<Movie[]>({
    key: "bookmarked",
    defaultValue: [],
  });
  useEffect(() => {
    setMovies(data);
  }, []);

  return (
    <MovieContext.Provider value={{ movies, bookmarkedMovies, setBookmarkedMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
