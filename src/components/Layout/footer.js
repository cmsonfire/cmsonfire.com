import { h } from "preact";
import { Box } from "../box.js";
import FooterSection from "./FooterSection/index.js";

const FooterWrapper = (props) => (
  <Box as="footer" {...props} class="w-full flex flex-col footer-background">
    <Box class="overflow-x-auto my-auto">{props.children}</Box>
  </Box>
);

export default (props) => {
  const colorMode = "default";
  return (
    <FooterWrapper>
      <FooterSection />
    </FooterWrapper>
  );
};
