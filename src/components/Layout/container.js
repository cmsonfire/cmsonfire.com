import { h } from "preact";
import { Box } from "components";

export default (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);
