import { Group, Button, Text, Flex } from "@mantine/core";
import useUserStore from "../../store/user-store";

export default function HeaderContent() {
  const userName = useUserStore((state) => state.name);

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
        <Text>{userName}</Text>
        <Button variant="outline">Logout</Button>
      </Group>
    </Flex>
  );
}
