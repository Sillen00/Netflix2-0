import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 6rem;
  font-size: 1.3rem;
  gap: 0.5rem;

  > div {
    gap: 1.5rem;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }

  @media (max-width: ${breakpoints.md}) {
    > div {
      gap: 1rem;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    height: 5rem;
    > div {
      gap: 0.75rem;
    }
    .hide-on-search {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.xs}) {
    height: 4rem;
    padding: 0 0.75rem;
    > div {
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

    @media (max-width: ${breakpoints.md}) {
      font-size: 3.25rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 3rem;
    }
    @media (max-width: ${breakpoints.xs}) {
      font-size: 2.125rem;
      padding-top: 0.25rem;
    }
  }
`;
