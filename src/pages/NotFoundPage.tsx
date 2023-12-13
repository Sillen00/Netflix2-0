import { Flex, Text, Title } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";

interface NotFoundPageProps {
  movieViewPage?: boolean;
}

function NotFoundPage({ movieViewPage }: NotFoundPageProps) {
  // Location used to get the current path
  const location = useLocation();
  // Format the path to remove the first slash and the word "movie" if it's a movie view page
  const formattedPath = `"${
    movieViewPage ? location.pathname.slice(7) : location.pathname.slice(1)
  }"`;

  return (
    <Flex className='not-found-flex'>
      <Title order={2}>
        The {movieViewPage ? "movie" : "page"} {formattedPath} was not found.
      </Title>
      <Text size='xl' c='white'>
        Go back to <NavLink to='/'>HomePage</NavLink>?
      </Text>
    </Flex>
  );
}

export default NotFoundPage;
