import styled from "@emotion/styled";

export const StyledMovieCarousel = styled.div`
  margin-left: 1rem;
  .mantine-Carousel-slide {
    background-color: #d3d3d3;
    margin-right: 1rem;
  }

  .mantine-Carousel-control {
    box-shadow: none;
    color: #fff;

    svg {
      height: 2rem;
    }
  }

  h2 {
    font-weight: 500;
    margin: 1rem 0;

    @media (max-width: 800px) {
      font-size: 1.6rem;
      margin: 0.8rem 0;
    }
  }
`;
