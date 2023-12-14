import styled from "@emotion/styled";
import { InputProps, TextInput } from "@mantine/core";
import breakpoints from "../../utils/breakpoints";

interface StyledInputProps extends InputProps {
  isSearchOpen: boolean;
}

export const StyledSearchInput = styled(TextInput, {
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
  .close {
    color: white;
  }
`;
