import styled from "@emotion/styled";

export const StyledVideoContainer = styled.div`
  .video-container {
    position: relative;

    .movie-info {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 2%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 2rem;
      text-align: center;
      color: #fff;

      @media (max-width: 800px) {
        padding: 1.5rem;
      }
      @media (max-width: 500px) {
        padding: 1rem;
      }

      h2 {
        @media (max-width: 800px) {
          font-size: 1.6rem;
        }
        @media (max-width: 500px) {
          font-size: 1.2rem;
        }
      }
    }

    .movie-actions {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 47.8px;
      align-items: center;

      .action-link {
        text-decoration: none;
        @media (max-width: 800px) {
          font-size: 0.8rem;
        }
      }

      .mute-wrapper {
        align-items: center;
        display: flex;
      }

      .mute {
        width: 24px;
        height: 24px;
        @media (max-width: 800px) {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 500px) {
          width: 16px;
          height: 16px;
        }
      }
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
