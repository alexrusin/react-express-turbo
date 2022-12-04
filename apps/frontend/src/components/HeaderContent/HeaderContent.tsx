import { Group, Button, Text, Flex } from "@mantine/core";

export default function HeaderContent() {
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
        <Text>Welcome Alex</Text>
        <Button variant="outline">Logout</Button>
      </Group>
    </Flex>
  );
}
