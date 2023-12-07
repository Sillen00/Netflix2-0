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

    .aspect-ratio-image {
      ::before {
        padding-bottom: 40%;
      }
    }

    img {
      width: 100%;
      max-height: 75vh;
    }
  }

  .video-container {
    position: relative;

    h2 {
      color: white;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 2%;
    }

    .aspect-ratio-video {
      ::before {
        padding-bottom: 40%;
      }
    }

    video {
      width: 100%;
      max-height: 75vh;
    }
  }
`;
