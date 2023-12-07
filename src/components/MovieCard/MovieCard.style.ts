import styled from "@emotion/styled";

export const StyledMovieCard = styled.div`
  max-width: 320px;

  .thumbnail-box {
    overflow: hidden;
    width: 100%;
    background-color: black;
  }

  .thumbnail {
    height: auto;
    display: block;
  }

  .movie-card-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .bookmark-box {
    position: relative;
    left: 4px;
  }
`;
