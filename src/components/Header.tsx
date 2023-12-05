import { Title } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { theme } from "../mantineTheme";

function Header() {
  if (!theme.colors || !theme.colors.primary) {
    return <div>Error: Theme colors are not defined!</div>;
  }

  return (
    <div style={{ backgroundColor: theme.colors.primary[0], color: "#fff" }}>
      {theme.colors.secondary && (
        <>
          <h1 style={{ color: theme.colors.secondary[0] }}>Netflix 2.0</h1>
          <Title style={{ color: theme.colors.secondary[0] }}>HYPE IN THE CHAT</Title>
        </>
      )}

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
    </div>
  );
}

export default Header;
