import { AspectRatio, Box, Image, Title, UnstyledButton } from "@mantine/core";
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
  //Ref for accessing the video element
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPoster, setShowPoster] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Finds the movie Inception from the movies array and sets it to a variable
  const movie = movies.find(movie => movie.title === "Inception");

  // Funktion for mute/unmute video
  const handleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Starts a timer when the component mounts. After 3 seconds, the poster image is hidden and the video starts playing.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Empty array to only run once

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
            <Image src={InceptionPoster} alt='Inception poster' />
          ) : (
            // When the video ends, the poster image is shown again
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
