import styled from "@emotion/styled";

export const StyledMovieView = styled.div`
  display: flex;
  gap: 4rem;
  padding: 2rem 6rem;
  align-items: center;

  img {
    width: 25vw;
    background-color: black;
    aspect-ratio: 217.35/320;
    object-fit: contain;
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
    font-size: 1.55rem;
  }

  span {
    font-size: 1.2rem;
  }

  .meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.25rem;

    h4:last-of-type {
      background-color: #333;
      padding: 0 0.375rem;
      font-size: 0.85rem;
      border-radius: 0.125rem;
      padding: 0 6px;
      color: #fff;
    }
  }
  .title {
    font-weight: bold;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 40.625rem;
  }

  .top {
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
