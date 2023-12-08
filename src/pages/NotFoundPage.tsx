import { Flex, Text, Title } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";

function NotFoundPage() {
  const location = useLocation();
  const formattedPath = `"${location.pathname.slice(1)}"`;

  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <Title order={2}>The page {formattedPath} was not found. </Title>
      <Text size='xl' c='white'>
        Go back to <NavLink to='/'>HomePage</NavLink>?
      </Text>
    </Flex>
  );
}

export default NotFoundPage;
