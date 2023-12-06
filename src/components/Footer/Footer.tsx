import { Box } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { StyledFooter } from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <Box className="link-box">
        <NavLink to='/'>
          <p>start</p>
        </NavLink>
        <NavLink to='/CategoryPage'>
          <p>category</p>
        </NavLink>
        <NavLink to='/BookMarkedPage'>
          <p>bookmarked</p>
        </NavLink>
        <NavLink to='/MovieViewPage'>
          <p>movie</p>
        </NavLink>
      </Box>
      <Box>
        <p>LOGO</p>
        <Box>github länkar.</Box>
      </Box>
    </StyledFooter>
  );
}

export default Footer;
