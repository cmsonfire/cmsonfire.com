import { jsx } from "react/jsx-runtime";
import { createElement } from "react";
import { Box } from "../Box.js";

const FooterWrapper = (props) => (
  <Box
    as="footer"
    {...props}
    className="w-full flex flex-col footer-background"
  >
    <Box className="overflow-x-auto my-auto">{props.children}</Box>
  </Box>
);

export default (props) => {
  return <FooterWrapper>{props.children}</FooterWrapper>;
};
