import { Box, Image } from "@mantine/core";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StyledMovieCard } from "./MovieCard.style";

export interface MovieCardProps {
  thumbnail: string;
  year: string;
  rating: string;
  title: string;
}

export const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
function MovieCard({ thumbnail, year, rating, title }: MovieCardProps) {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Replace the failed image with the placeholder image
    event.currentTarget.src = "./404.png";
  };

  return (
    <Link to={`/movie/${titleToSlug(title)}`}>
      <StyledMovieCard data-testid={`id-${title}`}>
        <Box className='thumbnail-box'>
          <Image className='thumbnail' src={thumbnail} onError={handleImageError} alt={title} />
        </Box>
        <Box className='movie-card-bottom'>
          <Box>
            <p>{year}</p>
            <p>{rating}</p>
          </Box>
          <Box className='bookmark-box'>
            <FaRegBookmark size={"40px"} />
          </Box>
        </Box>
      </StyledMovieCard>
    </Link>
  );
}

export default MovieCard;
