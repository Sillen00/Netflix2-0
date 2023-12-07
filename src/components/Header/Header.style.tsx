import styled from "@emotion/styled";
import { Input, InputProps, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

import breakpoints from "../../utils/breakpoints";

// Header styles:

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 6rem;
  gap: 0.75rem;
  color: white;
  > div {
    gap: 1.5rem;
    justify-content: flex-end;
    flex-wrap: nowrap;
  }
  > a {
    text-decoration: none;
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
    .hide-on-search {
      display: none;
    }
  }
`;

export const StyledTitle = styled(Title)`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
  white-space: nowrap;
  color: white;
  line-height: normal;
  @media (max-width: ${breakpoints.md}) {
    font-size: 3.25rem;
  }
  @media (max-width: ${breakpoints.sm}) {
    font-size: 3rem;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 2.25rem;
    padding-top: 0.25rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.15rem;
  }
  @media (max-width: ${breakpoints.xs}) {
    font-size: 1rem;
  }
`;

// SearchInput styles:

interface StyledInputProps extends InputProps {
  name: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  autoComplete: string;
  value: string;
  isSearchOpen: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledInput = styled(Input, {
  shouldForwardProp: prop => !["isSearchOpen"].includes(prop),
})<StyledInputProps>`
  .mantine-Input-input {
    background-color: transparent;
    border: ${props => (props.isSearchOpen ? "1px solid rgb(255,255,255,0.6)" : "none")};
    color: white;
    width: ${props => (props.isSearchOpen ? "280px" : "0")};
    transition: width 0.2s;
    min-height: 20px;
    height: 38px;
    padding-top: 2px;
    padding-left: ${props => (props.isSearchOpen ? "40px" : "20px")};
    @media (max-width: ${breakpoints.sm}) {
      width: ${props => (props.isSearchOpen ? "260px" : "0")};
      transition: width 0s; /* Instant transition */
    }
    @media (max-width: ${breakpoints.xs}) {
      transition: width 0s; /* Instant transition */
      height: 34px;
    }
    @media (max-width: 424px) {
      width: ${props => (props.isSearchOpen ? "100%" : "0")};
    }
  }
  .search-action-icon {
    &:hover {
      opacity: 0.7;
    }
  }
`;

// DisplayResults styles:

export const StyledSearchResultDisplayContainer = styled.div`
  padding: 2rem;
  position: absolute;
  top: 6rem;
  left: 0;
  height: 100%
  width: 100%;
  right: 0;
  bottom: 0;
  background-color: gray;
  z-index: 100;
  @media (max-width: ${breakpoints.sm}) {
    top: 5rem;
    padding: 1.5rem;
  }
  @media (max-width: ${breakpoints.xs}) {
    top: 4rem;
    padding: 1rem;
  }
  .noresults-text {
    text-align: center;
  }
`;
