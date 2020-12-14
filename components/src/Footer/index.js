import { createElement } from "react";
import { Box } from "../Box.js";

const FooterWrapper = (props) => (
  <Box as="footer" {...props} class="w-full flex flex-col footer-background">
    <Box class="overflow-x-auto my-auto">{props.children}</Box>
  </Box>
);

export default (props) => {
  return <FooterWrapper>{props.children}</FooterWrapper>;
};
