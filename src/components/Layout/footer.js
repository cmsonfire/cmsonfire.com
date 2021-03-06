import { h } from "preact";
import { Box } from "components";
import FooterSection from "./footer-section.js";

const FooterWrapper = (props) => (
  <Box as="footer" {...props} class="w-full flex flex-col footer-background">
    <Box class="overflow-x-auto my-auto">{props.children}</Box>
  </Box>
);

export default (props) => {
  return (
    <FooterWrapper>
      <FooterSection />
    </FooterWrapper>
  );
};
