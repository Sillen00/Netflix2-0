import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  
  .footer-container {

    /* min-height: 200px; */
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  .link-box a {
    color: white;
  }

  .link-box a:hover {
    color: #44027d;
  }

  .logo {
    font-size: 1.4rem;
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
