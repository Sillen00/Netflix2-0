import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledMovieCarousel = styled.div`
  margin-left: 1.5rem;
  margin-top: 2rem;

  .mantine-Carousel-control {
    box-shadow: none;
    transform: translateY(-200%);
  }

  h2 {
    font-weight: 500;
    margin: 1rem 0;

    @media (max-width: ${breakpoints.md}) {
      font-size: 1.6rem;
      margin: 0.8rem 0;
    }
  }
`;
