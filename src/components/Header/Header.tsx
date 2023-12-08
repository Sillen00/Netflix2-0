import { Group } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DisplayResults from "./DisplayResults";
import { StyledHeader, StyledNavLink, StyledTitle } from "./Header.style";
import SearchInput from "./SearchInput";

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const hideClass = isSearchOpen ? "hide-on-search" : "";

  return (
    <>
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
          <StyledNavLink to='/CategoryPage' className={hideClass}>
            Categories
          </StyledNavLink>
          <StyledNavLink to='/BookMarkedPage' className={hideClass}>
            Bookmarks
          </StyledNavLink>
        </Group>
      </StyledHeader>
      {searchInput && <DisplayResults searchInput={searchInput} setSearchOpen={setSearchOpen} />}
    </>
  );
}

export default Header;
