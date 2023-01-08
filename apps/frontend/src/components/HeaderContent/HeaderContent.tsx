import { Group, Button, Text, Flex } from "@mantine/core";
import useUserStore from "../../store/user-store";
import { eraseCookie } from "frontend-cookies";
import { Link, useNavigate } from "react-router-dom";
import client from "../../services/api-client";

export default function HeaderContent() {
  const userName = useUserStore((state) => state.name);
  const deleteUser = useUserStore((state) => state.deleteUser);
  const navigate = useNavigate();

  const logout = () => {
    deleteUser();
    eraseCookie("access_token");
    delete client.defaults.headers.common["Authorization"];
    navigate("/");
  };

  return (
    <Flex
      sx={{ width: "100%" }}
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Text>
        <Link to="/">Application Header</Link>
      </Text>
      <Group position="right" spacing="lg">
        <Text>{userName}</Text>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </Group>
    </Flex>
  );
}
