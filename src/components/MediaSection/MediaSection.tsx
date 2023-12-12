import { AspectRatio, Box, Title, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import Inception from "../../assets/Inception.mp4";
import InceptionPoster from "../../assets/InceptionPoster.jpeg";
import { Movie } from "../../utils/dataTypes";
import { StyledVideoContainer } from "./MediaSection.style";

interface MediaSectionProps {
  movies: Movie[];
}

function MediaSection({ movies }: MediaSectionProps) {
  // Ref för att komma åt video-elementet
  const videoRef = useRef<HTMLVideoElement>(null);
  // State för att visa poster-bild eller video
  const [showPoster, setShowPoster] = useState(true);
  // State för att visa unMute eller mute ikon
  const [isMuted, setIsMuted] = useState(true);

  // Hämta Inception-filmen från movies-arrayen
  const movie = movies.find(movie => movie.title === "Inception");

  // Funktion för att mutea och unMutea videon
  const handleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // När komponenten mountas, starta en timer som efter 3 sekunder stänger av poster-bilden och startar videon
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Tom array för att useEffect bara ska köras en gång

  return (
    <StyledVideoContainer>
      <Box className='video-container'>
        <Box className='movie-info'>
          <Title order={2}>{movie?.title}</Title>
          <Box className='movie-actions'>
            <Link to={`/movie/inception`} className='action-link'>
              Read more
            </Link>
            {!showPoster && (
              <UnstyledButton className='mute-wrapper' onClick={handleMute}>
                {isMuted ? (
                  <HiVolumeOff className='mute' aria-label='unmute' />
                ) : (
                  <HiVolumeUp className='mute' aria-label='mute' />
                )}
              </UnstyledButton>
            )}
          </Box>
        </Box>
        <AspectRatio ratio={16 / 9} className='aspect-ratio-media'>
          {showPoster ? (
            <img src={InceptionPoster} alt='Inception poster' />
          ) : (
            <video ref={videoRef} autoPlay muted onEnded={() => setShowPoster(true)}>
              <source src={Inception} type='video/mp4' />
            </video>
          )}
        </AspectRatio>
      </Box>
    </StyledVideoContainer>
  );
}

export default MediaSection;
