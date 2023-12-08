import { AspectRatio, Box, Title, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import Inception from "../../assets/Inception.mp4";
import InceptionPoster from "../../assets/InceptionPoster.jpeg";
import { Movie } from "../../contexts/MovieContext";
import { StyledVideoContainer } from "./MediaSection.style";

interface Prop {
  movies: Movie[];
}

function Video({ movies }: Prop) {
  // Ref för att komma åt video-elementet
  const videoRef = useRef<HTMLVideoElement>(null);
  // State för att visa poster-bild eller video
  const [showPoster, setShowPoster] = useState(true);
  // State för att visa unMute eller mute ikon
  const [isMuted, setIsMuted] = useState(true);

  const movie = movies.find(movie => movie.title === "Inception");
  
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
  }, []); // Empty dependency array to run the effect only once

  return (
    <StyledVideoContainer>
      <Box className='video-container'>
        <Box className='movie-info'>
          <Title order={2}>{movie?.title}</Title>
          <Box className='movie-actions'>
            <Link to={`/movie/inception`} className='action-link'>
              Läs mer
            </Link>
            {!showPoster && (
              <UnstyledButton onClick={handleMute}>
                {isMuted ? (
                  <HiVolumeOff className="mute" aria-label='unmute' />
                ) : (
                  <HiVolumeUp className="mute"  aria-label='mute' />
                )}
              </UnstyledButton>
            )}
          </Box>
        </Box>
        <AspectRatio ratio={16 / 9} className='aspect-ratio-media'>
          {showPoster ? (
            <img src={InceptionPoster} alt='Inception poster' />
          ) : (
            <video ref={videoRef} autoPlay muted>
              <source src={Inception} type='video/mp4' />
            </video>
          )}
        </AspectRatio>
      </Box>
    </StyledVideoContainer>
  );
}

export default Video;
