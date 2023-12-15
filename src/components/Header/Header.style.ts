import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 6rem;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.sm}) {
    height: 5rem;
    .hide-on-search {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.xs}) {
    height: 4rem;
    padding: 0 0.75rem;
  }

  > div {
    gap: 1.5rem;
    justify-content: flex-end;
    flex-wrap: nowrap;
    font-size: 1.3rem;

    @media (max-width: ${breakpoints.md}) {
      gap: 1rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      gap: 0.75rem;
    }
    @media (max-width: ${breakpoints.xs}) {
      gap: 0.5rem;
    }
  }

  .mantine-Group-root a {
    &:hover {
      opacity: 0.7;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 1.15rem;
    }
    @media (max-width: ${breakpoints.xs}) {
      font-size: 0.9rem;
    }
  }

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 3.5rem;
    font-weight: 500;
    white-space: nowrap;
    font-size: clamp(2.125rem, (6vw), 3.5rem);
  }
`;
