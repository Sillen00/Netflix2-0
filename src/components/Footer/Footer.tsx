import { Box, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <Box className='footer-container'>
        <Box className='navigation-links-box'>
          <Title order={4}>Navigation</Title>
          <NavLink to='/'>Start</NavLink>
          <NavLink to='/categories'>Categories</NavLink>
          <NavLink to='/bookmarks'>Bookmarks</NavLink>
        </Box>
        <Box className='github-links-box'>
          <Title order={4}>GitHub profiles</Title>
          <NavLink target='blank' to='https://github.com/moamoa07'>
            Moa
          </NavLink>
          <NavLink target='blank' to='https://github.com/leonbjorklund'>
            Leon
          </NavLink>
          <NavLink target='blank' to='https://github.com/Edvindjulic'>
            Edvin
          </NavLink>
          <NavLink target='blank' to='https://github.com/ellensofia'>
            Ellen
          </NavLink>
          <NavLink target='blank' to='https://github.com/Sillen00'>
            Simon
          </NavLink>
        </Box>
        <Box className="logo-box">
          <Title order={2}>NETFLIX 2.0</Title>
        </Box>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
