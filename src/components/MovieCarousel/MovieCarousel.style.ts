import styled from "@emotion/styled";

export const StyledMovieCarousel = styled.div`
  margin-left: 1.5rem;
  margin-top: 2rem;
  a {
    text-decoration: none;
  }

  .mantine-Carousel-slide {
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 217.35 / 320;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .mantine-Carousel-control {
    box-shadow: none;
    color: #fff;
    transform: translateY(-200%);

    svg {
      height: 2rem;
    }
  }

  .overlay {
    position: absolute;
  }

  h2 {
    font-weight: 500;
    margin: 0.4rem 0;

    @media (max-width: 800px) {
      font-size: 1.6rem;
      margin: 0.8rem 0;
    }
  }
`;
