import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledMovieView = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 2rem 6rem;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 40.625rem;

    h1 {
      font-size: clamp(1.75rem, 2.5vw, 2.5rem);
    }

    p {
      font-size: clamp(1.4rem, 1.95vw, 1.95rem);
    }

    span {
      font-size: clamp(0.875rem, 1.7vw, 1.2rem);
    }

    .meta {
      display: flex;
      gap: 1rem;
      align-items: center;

      h4 {
        background-color: #333;
        padding: 0 0.375rem;
        font-size: clamp(0.7rem, 0.85vw, 0.85rem);
        border-radius: 0.125rem;
        padding: 0 0.375rem;
      }
    }

    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > button {
        position: static;
      }
    }
  }

  img {
    width: 25vw;
    background-color: black;
    aspect-ratio: 217.35/320;
    object-fit: contain;
    @media (max-width: ${breakpoints.md}) {
      width: 80vw;
      max-width: 25rem;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;
