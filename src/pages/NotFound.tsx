import { Flex, Text, Title } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  console.log("location", location);

  // Remove the leading slash and enclose the path in quotation marks
  const formattedPath = `"${location.pathname.slice(1)}"`;

  return (
    <Flex
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title order={2}>The page {formattedPath} was not found. </Title>
      <Text size='xl' c='white'>
        Go back to <NavLink to='/'>HomePage</NavLink>?
      </Text>
    </Flex>
  );
}

export default NotFound;
