import styled from "@emotion/styled";

export const StyledMovieView = styled.div`
  display: flex;
  gap: 4rem;
  padding: 4rem 6rem;
  align-items: flex-start;

  img {
    width: 25vw;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: lighter;
  }

  h5 {
    font-size: 1.85rem;
    font-weight: lighter;
  }

  p {
    font-size: 1.75rem;
  }

  span {
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
    color: white;
  }

  .text {
    justify-content: space-evenly;
  }

  @media (max-width: 1300px) {
    gap: 2rem;
    > div {
      gap: 1rem;
    }
  }

  @media (max-width: 1000px) {
    padding: 2rem;
    gap: 4rem;

    flex-direction: column;
    align-items: center;

    img {
      width: 80vw;
      max-width: 400px;
    }

    h1 {
      font-size: 2rem;
    }

    h4 {
      font-size: 1rem;
      font-weight: lighter;
    }

    h5 {
      font-size: 1rem;
      font-weight: lighter;
    }

    p {
      font-size: 1.25rem;
    }

    .synopsis {
      font-size: 1.25rem;
    }
  }
`;
