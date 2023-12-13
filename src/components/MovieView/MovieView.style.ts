import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

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
    font-size: clamp(1.75rem, 2.5vw, 2.5rem);
    margin-bottom: 1rem;
  }

  h4 {
    font-size: clamp(0.875rem, 1.25vw, 1.25rem);
  }

  h5 {
    font-size: clamp(1rem, 1.85vw, 1.85rem);
  }

  h4,
  h5 {
    font-weight: 500;
  }

  p {
    font-size: clamp(1rem, 1.55vw, 1.55rem);
  }

  span {
    font-size: clamp(0.8rem, 1.2vw, 1.2rem);
  }

  .meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 0.25rem;

    h4:last-of-type {
      background-color: #333;
      padding: 0 0.375rem;
      font-size: clamp(0.7rem, 0.85vw, 0.85rem);
      border-radius: 0.125rem;
      padding: 0 0.375rem;
      color: #fff;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 40.625rem;
  }

  .top {
    position: relative;
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    width: 100%;

    > button {
      top: 0;
    }
  }

  .text {
    justify-content: space-evenly;
  }

  @media (max-width: ${breakpoints.lg}) {
    gap: 2rem;
    > div {
      gap: 1rem;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
    gap: 4rem;
    flex-direction: column;
    align-items: center;

    img {
      width: 80vw;
      max-width: 25rem;
    }
  }
`;
