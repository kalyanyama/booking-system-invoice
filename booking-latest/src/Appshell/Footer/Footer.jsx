import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import {
  CONTACT_INFORMATION,
  FOOTER_DETAILS,
  MAIN_DETAILS,
} from "../../Content/Content";

export function FooterLinks() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const groups = FOOTER_DETAILS.links.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        target="_blank"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {MAIN_DETAILS.full_name}
          <Text size="xs" c="dimmed" className={classes.description}>
            {MAIN_DETAILS.description}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {currentYear}{" "}
          <Text component="a" href={MAIN_DETAILS.domain}>
            {MAIN_DETAILS.name}
          </Text>
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGmail
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
              component="a"
              target="_blank"
              href={"mailto:" + CONTACT_INFORMATION.email}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            target="_blank"
            href={CONTACT_INFORMATION.links.linkedin}
          >
            <IconBrandLinkedin
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            target="_blank"
            href={CONTACT_INFORMATION.links.whatsapp}
          >
            <IconBrandWhatsapp
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>

          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            target="_blank"
            href={CONTACT_INFORMATION.links.instagram}
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
