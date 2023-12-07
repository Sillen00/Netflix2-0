import styled from "@emotion/styled";

export const StyledVideoContainer = styled.div`
  .video-container {
    position: relative;

    .movie-info {
      position: absolute;
      z-index: 1;
      top: 65%;
      left: 2%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      color: white;
    }

    .movie-actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .aspect-ratio-media {
      ::before {
        padding-bottom: 40%;
      }
    }

    img,
    video {
      width: 100%;
      max-height: 75vh;
    }
  }
`;
