import { Box, Image, Text, Title } from "@mantine/core";
import { useContext, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MovieContext } from "../../contexts/MovieContext";
import { Movie } from "../../utils/dataTypes";
import { StyledMovieView } from "./MovieView.style";

function MovieView(movie: Movie) {
  const [imageSrc, setImageSrc] = useState(movie.thumbnail);

  const handleImageError = () => {
    setImageSrc("../404.png");
  };
  const { title, genre, synopsis, year, rating, actors } = movie;

  const { bookmarkedMovies, setBookmarkedMovies } = useContext(MovieContext);

  const handleBookmarkClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Check if the movie is already bookmarked
    const isBookmarked = bookmarkedMovies.some(m => m.title === movie.title);

    // If it's bookmarked, remove it; otherwise, add it
    const updatedBookmarkedMovies = isBookmarked
      ? bookmarkedMovies.filter(m => m.title !== movie.title)
      : [...bookmarkedMovies, movie];

    // Update the bookmarkedMovies state with the new array
    setBookmarkedMovies(updatedBookmarkedMovies);
  };

  return (
    <StyledMovieView>
      <Image src={imageSrc} onError={handleImageError} alt={title} />
      <Box className='text'>
        <Box className='top'>
          <Box>
            <Title order={4}>
              <b>Year: </b>
              {year}
            </Title>
            <Title order={4}>
              <b>Rating: </b>
              {rating}
            </Title>
          </Box>
          <Box onClick={handleBookmarkClick} className='bookmark'>
            {bookmarkedMovies.some(m => m.title === movie.title) ? (
              <FaBookmark size={"30px"} />
            ) : (
              <FaRegBookmark size={"30px"} />
            )}
          </Box>
        </Box>
        <Box>
          <Title order={1}>{title}</Title>
          <Text>{synopsis}</Text>
        </Box>
        <Box className='bottom'>
          <Box>
            <Text span>Actors: </Text>
            {actors.map((actor, index) => (
              <Text span variant='span' key={index}>
                {actor}{" "}
              </Text>
            ))}
          </Box>

          <Text span>Genre: {genre}</Text>
        </Box>
      </Box>
    </StyledMovieView>
  );
}

export default MovieView;
