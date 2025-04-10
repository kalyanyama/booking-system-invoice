import {
  Anchor,
  Burger,
  Center,
  Container,
  Group,
  Image,
  Menu,
} from "@mantine/core";
import { HEADER_DETAILS } from "../../Content/Content";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";

const Header = ({ opened, toggle }) => {
  const items = HEADER_DETAILS.links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Anchor} href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Anchor key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Anchor>
    );
  });

  return (
    <Container
      component={Group}
      justify="center"
      size={"lg"}
      h={"100%"}
      align="center"
    >
      <Group justify="space-between" w={"100%"}>
        <Image
          src={HEADER_DETAILS.image}
          radius={"sm"}
          height={80}
          fit="cover"
        />
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>
      </Group>
    </Container>
  );
};

export default Header;
