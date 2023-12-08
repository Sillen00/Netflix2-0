import styled from "@emotion/styled";

export const StyledMovieCard = styled.div`
  .thumbnail-box {
    overflow: hidden;
    width: 100%;
    background-color: black;
  }
  img {
    aspect-ratio: 217.35 / 320;
    object-fit: cover;
  }

  .thumbnail {
    height: auto;
    display: block;
  }

  .movie-card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 0.3rem;
  }

  .bookmark-box {
    position: relative;
    left: 4px;
    color: white;
  }
`;
