import { h } from "preact";
import { Box } from "../box.js";
import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import { useSiteData } from "../SiteDataProvider/index.js";

export default function Navigation() {
  const data = useSiteData();
  const { navigation = {} } = data;

  return (
    <Box class="divide-y divide-gray-100">
      <Nav>
        {navigation.menu &&
          navigation.menu &&
          navigation.menu.items &&
          navigation.menu.items
            .filter((k) => !k.hidden)
            .map((item) => {
              return <NavItem href={item.path}>{item.label}</NavItem>;
            })}
      </Nav>
    </Box>
  );
}
