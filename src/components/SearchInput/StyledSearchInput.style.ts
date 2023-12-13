import styled from "@emotion/styled";
import { TextInput } from "@mantine/core";
import breakpoints from "../../utils/breakpoints";

export const StyledSearchInput = styled(TextInput)`
  min-height: 20px;
  padding-top: 2px;

  .mantine-Input-input {
    color: white;
    transition: width 0.2s ease 0s;
    background-color: transparent;
    border: none;
    width: 0;
    padding-left: 20px;
    @media (max-width: ${breakpoints.sm}) {
      transition: none;
    }

    &:focus {
      border: 1px solid rgb(255, 255, 255, 0.6);
      width: 280px;
      padding-left: 40px;
      @media (max-width: ${breakpoints.sm}) {
        width: 260px;
        min-height: 34px;
        height: 34px;
        transition: none;
      }
      @media (max-width: 424px) {
        width: 100%;
      }
    }
  }

  .search-action-icon {
    &:hover {
      opacity: 0.7;
    }
  }
`;
