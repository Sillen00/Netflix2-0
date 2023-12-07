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
          <NavLink to='/categories'>
            <p>Category</p>
          </NavLink>
          <NavLink to='/bookmarks'>
            <p>Bookmarked</p>
          </NavLink>
        </Box>
        <Box>
          <NavLink to='/' className='logo'>
            <Text>NETFLIX 2.0</Text>
          </NavLink>
        </Box>
      </Box>
      <Text className='github-links-heading'>Github Links</Text>
      <hr />
      <Box className='github-links-box'>
        <a target='blank' href='https://github.com/moamoa07'>
          Moa
        </a>
        <a target='blank' href='https://github.com/leonbjorklund'>
          Leon
        </a>
        <a target='blank' href='https://github.com/Edvindjulic'>
          Edvin
        </a>
        <a target='blank' href='https://github.com/ellensofia'>
          Ellen
        </a>
        <a target='blank' href='https://github.com/Sillen00'>
          Simon
        </a>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
