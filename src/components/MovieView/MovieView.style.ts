import styled from "@emotion/styled";

export const StyledMovieView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem;

  h1 {
    font-size: 2.5rem;
  }
  img {
    width: 30vw;
  }

  h4 {
    font-size: 2rem;
    font-weight: lighter;
  }

  p {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40.625rem;
  }

  .top {
    line-height: 1;
  }
`;
