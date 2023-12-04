import { createContext, useEffect, useState } from 'react';
import data from '../../data/movies.json';

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
}

interface Props {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextValue>({
  movies: [],
});

export default function SearchProvider({ children }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setMovies(data);
  }, []);

  return <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>;
}
