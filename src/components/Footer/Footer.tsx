import { Box, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <Box className='footer-container'>
        <Box className='link-box'>
          <NavLink to='/'>
            <p>Start</p>
          </NavLink>
          <NavLink to='/CategoryPage'>
            <p>Category</p>
          </NavLink>
          <NavLink to='/BookMarkedPage'>
            <p>Bookmarked</p>
          </NavLink>
          <NavLink to='/MovieViewPage'>
            <p>Movie</p>
          </NavLink>
        </Box>
        <Box>
          <Text className="logo">NETFLIX 2.0</Text>
        </Box>
      </Box>
      <Text className="github-links-heading">Github Links</Text>
      <hr />
      <Box className="github-links-box">
        <a href='#'>Moa</a>
        <a href='#'>Leon</a>
        <a href='#'>Edvin</a>
        <a href='#'>Ellen</a>
        <a href='#'>Simon</a>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
