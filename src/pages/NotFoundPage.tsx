import { Flex, Text, Title } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";

interface NotFoundPageProps {
  movieViewPage?: boolean;
}

function NotFoundPage({ movieViewPage }: NotFoundPageProps) {
  const location = useLocation();
  const formattedPath = `"${
    movieViewPage ? location.pathname.slice(7) : location.pathname.slice(1)
  }"`;

  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
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
