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
      padding: 2rem;
      text-align: center;
      color: #fff;

      @media (max-width: 1000px) {
        top: 45%;
        padding: 1.5rem;
      }

      @media (max-width: 500px) {
        top: 30%;
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

      .action-link {
        text-decoration: none;
        @media (max-width: 800px) {
          font-size: 0.8rem;
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
