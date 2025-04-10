import { AppShell, Burger, Group, Image } from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import { FooterLinks } from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

const AppshellProvider = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });
  return (
    <AppShell
      header={{ height: 80, offset: true, collapsed: !pinned }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
        <FooterLinks />
      </AppShell.Main>
    </AppShell>
  );
};

export default AppshellProvider;
