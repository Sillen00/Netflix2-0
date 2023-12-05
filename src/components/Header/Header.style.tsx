import styled from "@emotion/styled";
import { Input, InputProps, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

// Header styles:

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 6rem;
  color: white;
  > div {
    gap: 1rem;
  }
  > a {
    text-decoration: none;
  }
`;

export const StyledTitle = styled(Title)`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
  color: white;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

// SearchInput styles:

interface StyledInputProps extends InputProps {
  name: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  isSearchOpen: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const StyledInput = styled(Input, {
  shouldForwardProp: prop => !["isSearchOpen"].includes(prop),
})<StyledInputProps>`
  input {
    background-color: transparent;
    border: ${props => (props.isSearchOpen ? "1px solid rgb(255,255,255,0.6)" : "none")};
    color: white;
    width: ${props => (props.isSearchOpen ? "300px" : "0")};
    transition: width 0.2s;
    min-height: 20px;
    height: 38px;
    padding-top: 2px;
    padding-left: ${props => (props.isSearchOpen ? "40px" : "20px")};
  }

  .search-action-icon {
    &:hover {
      opacity: 0.7;
    }
  }
`;
