import styled from "@emotion/styled";

export const StyledButton = styled.div`
  .mantine-Button-root {
    background: none;
    color: #fff;
    border: none;
    font-weight: 400;
  }

  .mantine-Button-root:focus {
    font-weight: 700;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1210px) {
    justify-content: left;
  }
`;

export const StyledSelect = styled.div`
  color: #fff;
`;
