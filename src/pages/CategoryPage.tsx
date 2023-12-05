import { useState } from "react";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import MovieCard from "../components/MovieCard";

function CategoryPage() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div>
      <CategoryButton setSelectedGenre={setSelectedGenre} />
      <MovieCard selectedGenre={selectedGenre} />
      {/* lägg till detta i moviecard 
      function MovieCard({ selectedGenre }: { selectedGenre: string | null }) {
      */}
    </div>
  );
}

export default CategoryPage;
