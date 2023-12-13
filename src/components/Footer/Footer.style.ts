import styled from "@emotion/styled";
import breakpoints from "../../utils/breakpoints";

export const StyledFooter = styled.footer`
  color: #fff;
  border-top: 1px solid #f2f2f2;
  margin-top: 1rem;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;

  .footer-container {
    display: flex;
    justify-content: space-between;
    width: 60%;
    gap: 1rem;
    margin: 1rem auto;

    @media (max-width: ${breakpoints.md}) {
      width: 70%;
    }

    @media (max-width: ${breakpoints.sm}) {
      width: 80%;
      flex-wrap: wrap;
    }

    .navigation-links-box {
      display: flex;
      flex-direction: column;
    }

    .github-links-box {
      display: flex;
      flex-direction: column;
    }
  }

  a {
    max-width: 50px;
    color: #fff;
    text-decoration: none;
    :hover {
      opacity: 0.7;
    }
  }

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 3.5rem;
    font-weight: 500;
    white-space: nowrap;
    color: white;
    line-height: 1;
    @media (max-width: ${breakpoints.md}) {
      font-size: 3.25rem;
      padding-top: 0.2rem;
    }
    @media (max-width: ${breakpoints.sm}) {
      font-size: 3rem;
      padding-top: 0.4rem;
    }
    @media (max-width: ${breakpoints.xs}) {
      font-size: 2.25rem;
    }
    @media (max-width: 400px) {
      font-size: 2.125rem;
    }
  }
`;
