import styled from "@emotion/styled";

export const StyledCategoryButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  @media (max-width: 1210px) {
    justify-content: left;
  }

  .mantine-Button-root {
    background: none;
    color: #fff;
    border: none;
    font-weight: 400;
  }

  .mantine-Button-root:focus {
    font-weight: 700;
  }

  .select {
    color: #fff;
  }
`;
