import { Group, Title } from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DisplayResults from "../DisplayResult/DisplayResults";
import SearchInput from "../SearchInput/SearchInput";
import { StyledHeader } from "./Header.style";

function Header() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const hideClass = isSearchOpen ? "hide-on-search" : "";

  return (
    <>
      <StyledHeader>
        <NavLink to='/'>
          <Title order={1}>NETFLIX 2.0</Title>
        </NavLink>
        <Group>
          <SearchInput
            isSearchOpen={isSearchOpen}
            setSearchOpen={setSearchOpen}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <NavLink to='/categories' className={hideClass}>
            Categories
          </NavLink>
          <NavLink to='/bookmarks' className={hideClass}>
            Bookmarks
          </NavLink>
        </Group>
      </StyledHeader>
      {searchInput && <DisplayResults searchInput={searchInput} />}
    </>
  );
}

export default Header;
