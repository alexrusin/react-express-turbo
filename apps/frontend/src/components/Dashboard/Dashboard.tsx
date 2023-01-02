import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
} from "@mantine/core";
import HeaderContent from "../HeaderContent";
import withAuthentication from "../withAuthentication";
import { AxiosError } from "axios";
import { UseQueryResult, useQuery } from "react-query";
import apiClient from "../../services/api-client";

type Message = {
  message: string;
};

function Dashboard() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const {
    data: response,
    isLoading,
  }: UseQueryResult<{ data: Message }, AxiosError> = useQuery(
    "/message",
    () => apiClient.get("/message/John"),
    {
      enabled: enabled,
    }
  );

  const getMessage = () => {
    setEnabled(true);
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <HeaderContent />
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
      <Button mt="2em" loading={isLoading} onClick={getMessage}>
        Get Message
      </Button>
      <Text>{response?.data.message}</Text>
    </AppShell>
  );
}

export default withAuthentication(Dashboard);
