import { ScrollArea, Text } from "@mantine/core";
import classes from "./Navbar.module.css";
import { HEADER_DETAILS } from "../../Content/Content";

const Navbar = () => {
  const linksMap = HEADER_DETAILS.links.map((item) => (
    <Text
      className={classes.link}
      component="a"
      href={item.link}
      key={item.label}
    >
      {item.label}
    </Text>
  ));

  return (
    <ScrollArea className={classes.links} p="md">
      <div className={classes.linksInner}>{linksMap}</div>
    </ScrollArea>
  );
};

export default Navbar;
