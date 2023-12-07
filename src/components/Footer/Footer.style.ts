import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: grey; // TEMPORARY!!!!!!!!
  color: white;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .link-box a {
    color: white;
  }

  .link-box a:hover {
    opacity: 0.7;
  }

  .logo {
    text-decoration: none;
  }

  .logo p {
    font-size: 1.4rem;
    color: white;
    font-weight: 700;
  }

  .github-links-heading {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  .github-links-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  }
  .github-links-box a {
    color: white;
    text-decoration: none;
  }
`;
