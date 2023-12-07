import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  color: white;
  border-top: 2px solid #f2f2f2;
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.65);

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
    
    font-size: clamp(1.2rem, 2vw, 1.8rem);
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