import { ActionIcon, CloseButton } from "@mantine/core";
import { useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const clearRef = useRef<HTMLButtonElement>(null);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    inputRef.current?.focus();
  };

  const clearInput = () => {
    setSearchInput("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!searchInput) {
        if (
          !inputRef.current?.contains(event.target as Node) &&
          !clearRef.current?.contains(event.target as Node)
        ) {
          setSearchOpen(false);
          setSearchInput("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSearchOpen, setSearchInput, searchInput]);

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
        <ActionIcon className='search-action-icon' variant='transparent' onClick={toggleSearch}>
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
