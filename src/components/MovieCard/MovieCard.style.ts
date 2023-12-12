import styled from "@emotion/styled";

export const StyledMovieCard = styled.div`
  .thumbnail-box {
    position: relative;
    background-color: black;
    img {
      aspect-ratio: 217.35 / 320;
      object-fit: contain;
    }
  }

  .meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.25rem;
    align-items: center;
    font-weight: lighter;
    margin-top: 0.25rem;
    p:first-of-type {
      color: #c8c8c8;
      font-size: 0.875rem;
    }
    p:last-of-type {
      background-color: #333;
      padding: 0 0.375rem;
      font-size: 0.75rem;
      border-radius: 0.125rem;
      color: #fff;
    }
  }

  .title {
    font-weight: 500;
    font-size: 1rem;
    display: inline;
    &:hover {
      opacity: 0.8;
    }
  }

  .movie-card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 0.625rem;
    gap: 0.3rem;
  }
`;
