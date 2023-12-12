import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  color: #fff;
  border-top: 1px solid #f2f2f2;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;

  .footer-container {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    margin: 1rem 0;

    .navigation-links-box {
      display: flex;
      flex-direction: column;
      width: 130px;
      margin-left: 1.5rem;
    }

    .github-links-box {
      display: flex;
      flex-direction: column;
      width: 130px;
    }
  }

  .logo {
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
  }

  a {
    max-width: 50px;
    color: #fff;
    text-decoration: none;
    :hover {
      opacity: 0.7;
    }
  }
`;
