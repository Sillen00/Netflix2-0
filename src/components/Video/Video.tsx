import { AspectRatio, Box, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Inception from "../../assets/Inception.mp4";
import InceptionPoster from "../../assets/InceptionPoster.jpeg";
import { StyledVideoContainer } from "./Video.style";

function Video() {
  // Ref för att komma åt video-elementet
  const videoRef = useRef<HTMLVideoElement>(null);
  // State för att visa poster-bild eller video
  const [showPoster, setShowPoster] = useState(true);

  // När komponenten mountas, starta en timer som efter 3 sekunder stänger av poster-bilden och startar videon
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPoster(false);
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer); // Stäng av timern när komponenten unmountas
  }, []);

  return (
    <StyledVideoContainer>
      {showPoster ? (
        <Box className='poster-container'>
          <Title order={1}>Inception</Title>
          <AspectRatio ratio={16 / 9}>
            <img src={InceptionPoster} alt='Inception poster' />
          </AspectRatio>
        </Box>
      ) : (
        <Box className='video-container'>
          <Title order={2}>Inception</Title>
          <AspectRatio ratio={16 / 9}>
            <video ref={videoRef} autoPlay muted>
              <source src={Inception} type='video/mp4' />
            </video>
          </AspectRatio>
        </Box>
      )}
    </StyledVideoContainer>
  );
}

export default Video;
