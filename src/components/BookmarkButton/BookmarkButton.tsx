import { Tooltip } from "@mantine/core";
import { useContext, useRef, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MovieContext } from "../../contexts/MovieContext";
import { Movie } from "../../utils/dataTypes";
import { StyledBookmarkButton } from "./BookMarkButton.style";

function BookmarkButton(movie: Movie) {
  const { bookmarkedMovies, setBookmarkedMovies } = useContext(MovieContext);
  const [opened, setOpened] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const tooltipTimer = useRef<NodeJS.Timeout | null>(null);

  const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.some(m => m.title === movie.title);
    if (!isBookmarked) {
      setTooltipText("Added to bookmarks!");
    } else {
      setTooltipText("Removed from bookmarks!");
    }

    setOpened(true);

    if (tooltipTimer.current) {
      clearTimeout(tooltipTimer.current);
    }
    tooltipTimer.current = setTimeout(() => {
      setOpened(false);
    }, 1200);

    // If it's bookmarked, remove it; otherwise, add it
    const updatedBookmarkedMovies = isBookmarked
      ? bookmarkedMovies.filter(m => m.title !== movie.title)
      : [...bookmarkedMovies, movie];

    // Update the bookmarkedMovies state with the new array
    setBookmarkedMovies(updatedBookmarkedMovies);
  };

  return (
    <Tooltip label={tooltipText} position='bottom' opened={opened}>
      <StyledBookmarkButton onClick={handleBookmarkClick} data-testid={`bookmark-${movie.title}`}>
        {/* If movie is bookmarked, show solid icon, else show outlined icon. */}
        {bookmarkedMovies.some(m => m.title === movie.title) ? (
          <FaBookmark className='bookmark-icon' />
        ) : (
          <FaRegBookmark className='bookmark-icon' />
        )}
      </StyledBookmarkButton>
    </Tooltip>
  );
}

export default BookmarkButton;
