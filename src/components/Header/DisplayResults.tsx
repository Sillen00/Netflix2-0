import styled from "@emotion/styled";
import { Text } from "@mantine/core";
import { useMemo } from "react";
import movies from "../../../data/movies.json";

interface DisplayResultsProps {
  searchInput: string;
}

function DisplayResults({ searchInput }: DisplayResultsProps) {
  const filteredMovies = useMemo(() => {
    if (!searchInput) return [];
    return movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
  }, [searchInput, movies]);

  return (
    <StyledSearchResultDisplayContainer>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => <p key={index}>{movie.title}</p>)
      ) : (
        <Text
          c='white'
          size='xl'
          mb='10rem'
        >{`Your search for "${searchInput}" did not have any matches.`}</Text>
      )}
    </StyledSearchResultDisplayContainer>
  );
}

export default DisplayResults;

export const StyledSearchResultDisplayContainer = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://private-user-images.githubusercontent.com/115644756/288021567-f99ce5cf-121d-4b25-b685-c99aa7fd5838.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE3NzU0ODQsIm5iZiI6MTcwMTc3NTE4NCwicGF0aCI6Ii8xMTU2NDQ3NTYvMjg4MDIxNTY3LWY5OWNlNWNmLTEyMWQtNGIyNS1iNjg1LWM5OWFhN2ZkNTgzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMjA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTIwNVQxMTE5NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MDZjN2IyMDE1YWM0YzU1ZmZkNDEyZjVkNDE5ZTIwMjA4ZTEyMmEzNDM1MTg0MGNiYTZkMjAzMDU0MmY1MThiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.T7fmik-BsGKxtoo4yxvDvasdwdNH9XcfHyXCdH7JzzA);
  background-size: cover;
  background-attachment: fixed;
`;
