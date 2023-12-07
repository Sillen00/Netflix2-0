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
    font-size: 1.25rem;
    font-weight: lighter;
  }

  p {
    font-size: 1.5rem;
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
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    width: 100%;
  }

  .bookmark {
    background-color: #fff;
    width: 35px;
    height: 45px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .title {
      font-size: 1.5rem;
    }
    img {
      width: 80vw;
      max-width: 400px;
    }

    h4 {
      font-size: 1rem;
      font-weight: lighter;
    }

    .synopsis {
      font-size: 1.25rem;
    }

    h5 {
      font-size: 1rem;
      font-weight: lighter;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;
