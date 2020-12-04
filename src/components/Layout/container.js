import { h } from "preact";
import { Box } from "../box.js";

export default (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);
