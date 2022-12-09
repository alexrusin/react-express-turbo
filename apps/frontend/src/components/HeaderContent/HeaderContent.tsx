import { Group, Button, Text, Flex } from "@mantine/core";
import { useQuery } from "react-query";
import { Loader } from "@mantine/core";
import apiClient from "../../services/api-client";

export default function HeaderContent() {
  const { isLoading, error, data } = useQuery("welcomeMessage", () =>
    apiClient.get("/message/Alex").then((response) => response.data)
  );

  function displayMessage() {
    if (isLoading) {
      return <Loader variant="dots" />;
    }
    if (error) {
      return <Text color="red">Sorry, there was an error</Text>;
    }
    return <Text>{data.message}</Text>;
  }

  return (
    <Flex
      sx={{ width: "100%" }}
      width="100%"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Text>Application Header</Text>
      <Group position="right" spacing="lg">
        {displayMessage()}
        <Button variant="outline">Logout</Button>
      </Group>
    </Flex>
  );
}
