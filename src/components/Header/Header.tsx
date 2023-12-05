import { Group } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader, StyledNavLink, StyledTitle } from "./Header.style";
import SearchInput from "./SearchInput";

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <StyledHeader>
      <NavLink to='/'>
        <StyledTitle>NETFLIX 2.0</StyledTitle>
      </NavLink>
      <Group>
        <SearchInput
          isSearchOpen={isSearchOpen}
          setSearchOpen={setSearchOpen}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <StyledNavLink to='/CategoryPage'>Categories</StyledNavLink>
        <StyledNavLink to='/BookMarkedPage'>Bookmarks</StyledNavLink>
      </Group>
    </StyledHeader>
  );
}

export default Header;
