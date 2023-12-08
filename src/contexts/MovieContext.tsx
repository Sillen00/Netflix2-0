import { createContext, useEffect, useState } from "react";
import data from "../../data/movies.json";

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  isTrending?: boolean;
}

interface MovieContextValue {
  movies: Movie[];
  bookmarkedMovies: string[];
  setBookmarkedMovies: (bookmarkedMovies: string[]) => void;
}


interface Props {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextValue>({
  movies: [],
  bookmarkedMovies: [],
  setBookmarkedMovies: () => {},
});

export default function SearchProvider({ children }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<string[]>([]);
  useEffect(() => {
    setMovies(data);
    setBookmarkedMovies([]);
  }, []);

  return <MovieContext.Provider value={{ movies, bookmarkedMovies, setBookmarkedMovies }}>{children}</MovieContext.Provider>;
}
