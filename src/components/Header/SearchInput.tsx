import { ActionIcon, CloseButton } from "@mantine/core";
import { useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { StyledInput } from "./Header.style";

interface SearchInputProps {
  isSearchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;
  searchInput: string;
  setSearchInput: (input: string) => void;
}
function SearchInput({
  isSearchOpen,
  setSearchOpen,
  searchInput,
  setSearchInput,
}: SearchInputProps) {
  // Ref for accessing the input element
  const inputRef = useRef<HTMLInputElement>(null);
  // Ref for accessing the clear button element
  const clearRef = useRef<HTMLButtonElement>(null);
  // Location used to get the current path
  const location = useLocation();
  // Function for toggling the search input and focusing it
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    inputRef.current?.focus();
  };

  const clearInput = () => {
    setSearchInput("");
    inputRef.current?.focus();
  };

  // Closes the search input and clears the input when the user navigates to a new page
  useEffect(() => {
    setSearchOpen(false);
    setSearchInput("");
  }, [location.pathname, setSearchOpen, setSearchInput]);

  // Closes the search input when the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!searchInput) {
        if (
          !inputRef.current?.contains(event.target as Node) &&
          !clearRef.current?.contains(event.target as Node)
        ) {
          setSearchInput("");
          setSearchOpen(false);
        }
      }
    };

    // Event listener for clicks outside of the search input
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location, setSearchOpen, setSearchInput, searchInput]);

  return (
    <StyledInput
      name='search-bar'
      placeholder='Search...'
      autoComplete='off'
      size='md'
      ref={inputRef}
      value={searchInput}
      onChange={e => setSearchInput(e.currentTarget.value)}
      leftSectionPointerEvents={isSearchOpen ? "none" : "all"}
      leftSection={
        <ActionIcon className='search-action-icon' variant='transparent' aria-label="search button" onClick={toggleSearch}>
          <IoSearchOutline color='white' size='1.5rem' />
        </ActionIcon>
      }
      rightSectionPointerEvents='all'
      rightSection={
        isSearchOpen &&
        searchInput && (
          <CloseButton
            iconSize='1.5rem'
            color='white!important'
            ref={clearRef}
            variant='transparent'
            aria-label='Clear input'
            onClick={clearInput}
            style={{
              color: "white",
            }}
          />
        )
      }
      isSearchOpen={isSearchOpen}
    />
  );
}

export default SearchInput;
