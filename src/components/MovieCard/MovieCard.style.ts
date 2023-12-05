import styled from "@emotion/styled";

export const StyledComponent = styled.div`
  max-width: 220px;

  .tumbnail-box {
    overflow: hidden;
  }

  .tumbnail {
    width: 100%;
    height: auto;
    display: block;
  }

  .movie-card-buttom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .bookmark-box {
    width: 49.6px;
    height: 49.6px;
  }
  .bookmark-box img {
    position: relative;
    left: 5px;
  }
`;
