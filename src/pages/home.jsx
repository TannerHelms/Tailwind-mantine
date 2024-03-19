import { AppShell, Burger, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "../componets/navbar";

const Home = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      main={{ padding: 20 }}
      padding="md"
    >
      <AppShell.Header p={5}>
        <div className="float-start ">
          <Burger opened={opened} onClick={toggle} size="lg" hiddenFrom="sm" />
        </div>
        <div className="fixed inset-x-0 -z-10">
          <Title order={1} ta="center">
            Home
          </Title>
        </div>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSimple />
      </AppShell.Navbar>
      <AppShell.Main>
        <p>hey uyall</p>
      </AppShell.Main>
    </AppShell>
  );
};
export default Home;
