import { AspectRatio, Box, Title, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import Inception from "../../assets/Inception.mp4";
import InceptionPoster from "../../assets/InceptionPoster.jpeg";
import { StyledVideoContainer } from "./Video.style";

function Video() {
  // Ref för att komma åt video-elementet
  const videoRef = useRef<HTMLVideoElement>(null);
  // State för att visa poster-bild eller video
  const [showPoster, setShowPoster] = useState(true);
  // State för att visa unMute eller mute ikon
  const [isMuted, setIsMuted] = useState(true);

  // När komponenten mountas, starta en timer som efter 3 sekunder stänger av poster-bilden och startar videon
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer); // Stäng av timern när komponenten unmountas
  }, []);

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <StyledVideoContainer>
      <Box className='video-container'>
        <Box className='movie-info'>
          <Title order={2}>Inception</Title>
          <Box className='movie-actions'>
            <UnstyledButton>Läs mer</UnstyledButton>
            {!showPoster && (
              <UnstyledButton onClick={handleMute}>
                {isMuted ? <HiVolumeOff size={24} aria-label='unmute' /> : <HiVolumeUp size={24} aria-label='mute' />}
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
