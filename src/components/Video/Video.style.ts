import styled from "@emotion/styled";

export const StyledVideoContainer = styled.div`
  .poster-container {
    position: relative;

    h1 {
      color: white;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .aspect-ratio {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
      max-height: 75vh;
      object-fit: cover;
    }
  }

  .video-container {
    position: relative;

    h2 {
      color: white;
      position: absolute;
      z-index: 99;
      top: 50%;
      left: 2%;
    }

    video {
      width: 100%;
      height: auto;
      max-height: 75vh;
    }
  }
`;
