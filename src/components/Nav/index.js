import { h } from "preact";
import { Box, Nav } from "components";
import { useSiteData } from "../SiteDataProvider/index.js";

export default function Navigation(props) {
  const data = useSiteData();
  const { navigation = {} } = data;

  return (
    <Box class={`divide-y divide-gray-100 ${props.class}`}>
      <Nav data={navigation} />
      {props.children}
    </Box>
  );
}
