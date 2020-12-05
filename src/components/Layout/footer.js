import { h } from "preact";
import { Box } from "../box.js";
import FooterSection from "./FooterSection/index.js";

const FooterWrapper = (props) => (
  <Box as="footer" {...props} class="flex flex-col">
    <Box class="overflow-x-auto my-auto">{props.children}</Box>
  </Box>
);

export default (props) => {
  const colorMode = "default";
  return (
    <FooterWrapper
      style={{
        height: 420,
        // filter: 'brightness(0.5) sepia(0.1) hue-rotate(20deg) saturate(5)',
        background: `url(/images/bottom-waves${
          colorMode === "dark" ? "-dark" : ""
        }.svg), transparent`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "bottom",
      }}
    >
      <FooterSection />
    </FooterWrapper>
  );
};
