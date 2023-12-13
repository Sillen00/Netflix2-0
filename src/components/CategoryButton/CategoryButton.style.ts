import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledCategoryButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: ${breakpoints.lg}) {
    justify-content: left;
  }

  .mantine-Button-root {
    background: none;
    color: #fff;
    border: none;
    font-weight: 400;
  }

  .mantine-Button-root:focus {
    font-weight: bold;
  }
`;
